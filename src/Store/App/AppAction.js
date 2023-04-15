export const AppCounter = (data, type) => {
    if (type === "appCount") {
        return {
            type: "appCount",
            data: data
        }
    }
}