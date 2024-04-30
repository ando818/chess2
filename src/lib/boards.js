let meshConfig = {
    bishop: {
        white: {
            name: "Bishop_White001_Wood_0",
        },
        black: {
            name: "Bishop_White001_Wood_0",
        },
    },
    rook: {
        white: {
            name: "Rook_White001_Wood_0",
        },
        black: {
            name: "Rook_Black001_WoodDark_0",
        },
    },
    knight: {
        white: {
            name: "Knight_White001_Wood_0",
        },
        black: {
            name: "Knight_White002_WoodDark_0",
        },
    },
    pawn: {
        white: {
            name: "Pawn_White001_Wood_0",
        },
        black: {
            name: "Pawn_White010_WoodDark_0",
        },
    },
    king: {
        white: {
            name: "King_White_Wood_0",
        },
        black: {
            name: "King_White001_WoodDark_0",
        },
    },
    queen: {
        white: {
            name: "Queen_White_Wood_0",
        },
        black: {
            name: "Queen_White001_WoodDark_0",
        },
    },
};

export let board2D = {
    "P": {
        src: "/2d/pawn_white.png"
    },
    "p": {
        src: "/2d/pawn_black.png"
    },
    "B": {
        src: "/2d/bishop_white.png"

    },
    "b": {
        src: "/2d/bishop_black.png"

    },
    "r": {
        src: "/2d/rook_black.png"
    },
    "R": {
        src: "/2d/rook_white.png"
    },
    "K": {
        src: "/2d/king_white.png"
    },
    "k": {
        src: "/2d/king_black.png"
    },
    "n": {
        src: "/2d/knight_black.png"
    },
    "N": {
        src: "/2d/knight_white.png"
    },
    "Q": {
        src: "/2d/queen_white.png"
    },
    "q": {
        src: "/2d/queen_black.png"
    }

}

export let defaultBoard = {
    meshConfig,
    modelSrc: "purchased.gltf"
}