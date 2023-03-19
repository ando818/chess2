export const scaleVertices = (vertices, scale) => {
    const scaledVerts = Array.from(vertices);
    for (let i = 0; i < vertices.length / 3; i++) {
        scaledVerts[i * 3] *= scale.x;
        scaledVerts[i * 3 + 1] *= scale.y;
        scaledVerts[i * 3 + 2] *= scale.z;
    }
    return scaledVerts;
};
export const scaleColliderArgs = (shape, args, scale) => {
    // Heightfield only scales the last arg
    const newArgs = args.slice();
    if (shape === 'heightfield') {
        ;
        newArgs[3] *= scale.x;
        return newArgs;
    }
    // Trimesh and convex scale the vertices
    if (shape === 'trimesh' || shape === 'convexHull') {
        newArgs[0] = new Float32Array(scaleVertices(newArgs[0], scale));
        return newArgs;
    }
    const scaleArray = [scale.x, scale.y, scale.z];
    return newArgs.map((arg, index) => scaleArray[index] * arg);
};
