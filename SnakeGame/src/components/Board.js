import React from "react";

const Board = ({ rows, cols, top }) => {
    const dots = Array(rows * cols).fill(0);
    return (
        <View style={[styles.board, { top: HEADER_HEIGHT + top }]}>
          {dots.map((_, index) => (
            <View style={styles.pixel} key={index}></View>
          ))}  
        </View>
    )
}

const styles = StyleSheet.create({
    board: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        position: "absolute",
        marginHorizontal: BORDER,
    },
    pixel: {
        width: PIXEL,
        height: PIXEL,
        borderColor: colors.p6,
        borderWidth: GAP,
        borderRadius: BORDER_RADIUS,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default Board