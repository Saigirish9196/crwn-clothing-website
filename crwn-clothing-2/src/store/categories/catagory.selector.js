export const selectProducts = state =>{ 
    console.log('selector fired')
    return state.products.categories 
}