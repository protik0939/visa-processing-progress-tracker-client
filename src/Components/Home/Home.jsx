const Home = () => {
    return (
        <div className="w-full h-auto flex justify-center items-center">
            <div className="relative items-center w-full flex justify-center flex-col flex-wrap mt-40">
                <label className="form-control w-full max-w-xs text-center px-2">
                    <div className="label"><span className="label-text text-center w-full">Email</span></div>
                    <input type="email" placeholder="example@email.com" className="input input-bordered w-full max-w-xs" />
                </label>

                <label className="form-control w-full max-w-xs text-center px-2 mt-6">
                    <div className="label"><span className="label-text text-center w-full">Tracker Number</span></div>
                    <input type="email" placeholder="03082024130712" className="input input-bordered w-full max-w-xs" />
                </label>
                <input className="btn btn-active mt-10" type="submit" value="Submit" />
            </div>
        </div>
    );
};

export default Home;