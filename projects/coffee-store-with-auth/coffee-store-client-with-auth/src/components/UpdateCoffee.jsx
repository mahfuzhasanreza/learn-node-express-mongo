import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {

    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleUpdateCoffee = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = { name, quantity, supplier, taste, category, details, photo };
        console.log(updatedCoffee);

        // send data to the server
        fetch(`https://coffee-store-server-with-auth-seven.vercel.app/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Continue'
                    })
                }
            })
    }

    return (
        <div className="bg-[#F4F3F0] p-20">
            <h2 className="mt-4 mx-4 text-3xl font-semibold">Update Coffee: {name}</h2>
            <form onSubmit={handleUpdateCoffee} className="space-y-5 my-4 gap-11 mx-4">
                {/* form name quantity row */}
                <div className="md:flex w-full gap-5">
                    <label className="input input-bordered flex items-center gap-2 md:w-1/2">
                        <input type="text" name="name" defaultValue={name} className="grow" placeholder="Coffee Name" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 md:w-1/2">
                        <input type="text" name="quantity" defaultValue={quantity} className="grow" placeholder="Available Quantity" />
                    </label>
                </div>{/* form supplier taste row */}
                <div className="md:flex w-full gap-5">
                    <label className="input input-bordered flex items-center gap-2 md:w-1/2">
                        <input type="text" name="supplier" defaultValue={supplier} className="grow" placeholder="Supplier Name" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 md:w-1/2">
                        <input type="text" name="taste" defaultValue={taste} className="grow" placeholder="Taste" />
                    </label>
                </div>{/* form category details row */}
                <div className="md:flex w-full gap-5">
                    <label className="input input-bordered flex items-center gap-2 md:w-1/2">
                        <input type="text" name="category" defaultValue={category} className="grow" placeholder="Category" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 md:w-1/2">
                        <input type="text" name="details" defaultValue={details} className="grow" placeholder="Details" />
                    </label>
                </div>{/* form photo row */}
                <div className="w-full gap-5">
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" name="photo" defaultValue={photo} className="grow" placeholder="Photo" />
                    </label>
                </div>
                <input type="submit" value="Update Coffee" className="btn btn-block bg-gray-600 text-white" />
            </form>
        </div>
    );
};

export default UpdateCoffee;