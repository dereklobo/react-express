function ErrorText({error}) {
    if(error) {
        console.log(error.name )
        return (
            <div className="col">
                <p className='text-red-500'> Something went wrong. Error: {error.message}</p>
            </div>
        )
    }
   
}

export default ErrorText;