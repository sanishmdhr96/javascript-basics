async function fetchAllProducts() {

    /**
     * 1. URL -> endpoint -> API
     * 2. options -> method, headers
     *  
     * HTTP METHODS / API METHOD
     * GET
     * POST
     * PUT
     * PATCH
     * DELETE
     * 
     *  */

    try {
        const data = await fetch('https://fakestoreapi.com/products')

        if (data?.status === 200) {
            const response = await data.json()
            console.log(response)
        }


    } catch {

    }



}