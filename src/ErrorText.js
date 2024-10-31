function ErrorText({error}) {
    if(error && error.name) {
        console.log(error.name)
        return (
            <div className="container max-w-5xl mx-auto px-2 py-6">
                <p className='font-opensans font-bold text-red-500'> Something went wrong. Error: {error.message}</p>
            </div>
        )
    }
   
}

export default ErrorText;