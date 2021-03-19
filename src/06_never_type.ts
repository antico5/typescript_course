// Make clear that a function will never return anything
function generateError(message: string, errorCode: number): never {
  throw { message, errorCode };
}

generateError("message!", 500);

export {};
