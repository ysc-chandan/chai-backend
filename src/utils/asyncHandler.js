<<<<<<< HEAD
const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
=======
// in promises
const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req,res,next)).
        catch((err)=>next(err))
>>>>>>> 6d7682ae87cb24209b2d87f154cc582ddd8fd7a6
    }
}


<<<<<<< HEAD
export { asyncHandler }
=======
export {asyncHandler}
>>>>>>> 6d7682ae87cb24209b2d87f154cc582ddd8fd7a6




<<<<<<< HEAD
// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}


// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
=======


// const asyncHandler = () => () => {}
// const asyncHandler = (fn) =>  () => {}
// const asyncHandler = (fn) => async () => {}

    // ye try catch wala tha
// const asyncHandler = (fn) => async (req,res,next) => {
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success:false,
//             message:err.message
>>>>>>> 6d7682ae87cb24209b2d87f154cc582ddd8fd7a6
//         })
//     }
// }