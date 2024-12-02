import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAddCoffee = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, quantity, supplier, taste, category, details, photo };
        console.log(newCoffee);

        // send data to the server
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'User Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Continue'
                    })
                }
            })
    }

    return (
        <div className="bg-[#F4F3F0] p-20">
            <h2 className="mt-4 mx-4 text-3xl font-semibold">Add Coffee</h2>
            <form onSubmit={handleAddCoffee} className="space-y-5 my-4 gap-11 mx-4">
                {/* form name quantity row */}
                <div className="md:flex w-full gap-5">
                    <label className="input input-bordered flex items-center gap-2 md:w-1/2">
                        <input type="text" name="name" className="grow" placeholder="Coffee Name" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 md:w-1/2">
                        <input type="text" name="quantity" className="grow" placeholder="Available Quantity" />
                    </label>
                </div>{/* form supplier taste row */}
                <div className="md:flex w-full gap-5">
                    <label className="input input-bordered flex items-center gap-2 md:w-1/2">
                        <input type="text" name="supplier" className="grow" placeholder="Supplier Name" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 md:w-1/2">
                        <input type="text" name="taste" className="grow" placeholder="Taste" />
                    </label>
                </div>{/* form category details row */}
                <div className="md:flex w-full gap-5">
                    <label className="input input-bordered flex items-center gap-2 md:w-1/2">
                        <input type="text" name="category" className="grow" placeholder="Category" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 md:w-1/2">
                        <input type="text" name="details" className="grow" placeholder="Details" />
                    </label>
                </div>{/* form photo row */}
                <div className="w-full gap-5">
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" name="photo" className="grow" placeholder="Photo" />
                    </label>
                </div>
                <input type="submit" value="Add Coffee" className="btn btn-block bg-gray-600 text-white" />
            </form>
        </div>
    );
};

export default AddCoffee;