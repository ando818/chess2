const parseJSON = () =>
  new TransformStream({
    transform(chunk, controller) {
      console.log("chunk",chunk)
      //controller.enqueue(JSON.parse(chunk));
    }
  });

const splitStream = (splitOn) => {
  let buffer = "";
  return new TransformStream({
    transform(chunk, controller) {
      buffer += chunk;
      const parts = buffer.split(splitOn);
      parts.slice(0, -1).forEach((part) => controller.enqueue(part));
      buffer = parts[parts.length - 1];
    },
    flush(controller) {
      if (buffer) controller.enqueue(buffer);
    }
  });
};

const jsonStream = (url) =>
  fetch(url, {
    headers: {
      "Authorization": `Bearer lip_YsEt7QZd8auxRbXTTs54`,
      'Content-Type': "application/x-ndjson"
    }
  }).then((response) => (
    {
      response,
      reader: response.body
        .pipeThrough(new TextDecoderStream())
        // Needed to stream by line and then JSON parse the line
        .pipeThrough(splitStream("\n"))
        .pipeThrough(parseJSON())
        .getReader()
    }));


    const readStream = processLine => response => {
      const stream = response.body.getReader();
      const matcher = /\r?\n/;
      const decoder = new TextDecoder();
      let buf = '';
    
      const loop = () =>
        stream.read().then(({ done, value }) => {
          if (done) {
            if (buf.length > 0) processLine(JSON.parse(buf));
          } else {
            const chunk = decoder.decode(value, {
              stream: true
            });
            buf += chunk;
    
            const parts = buf.split(matcher);
            buf = parts.pop();
            for (const i of parts.filter(p => p)) processLine(JSON.parse(i));
            return loop();
          }
        });
    
      return loop();
    }

    export {readStream}

export { jsonStream };
