//This is a higher order function which is accepting a function and returning a promise
export const catchAsyncError = (theFunction) =>{
    return(req, res, next)=>{
        Promise.resolve(theFunction(req, res, next)).catch(next);
    };
};