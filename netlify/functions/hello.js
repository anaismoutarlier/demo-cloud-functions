exports.handler = async function(event, context) {
    // console.log({ event, context })

    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Hello La Capsule !" })
    }
}