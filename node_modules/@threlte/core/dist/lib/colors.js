import { Color } from 'three';
export const convertColorRepresentationToColor = (colorRep, linear) => {
    if (linear)
        return new Color(colorRep);
    return new Color().setHex(new Color(colorRep).getHex()).convertSRGBToLinear();
};
