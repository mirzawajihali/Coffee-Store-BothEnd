import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Coffee = ({coffee}) => {


    const handleDelete = _id => { 
      

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
         
            fetch(`http://localhost:5000/coffee/${_id}`, {
                method : "DELETE"
            } )
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    Swal.fire(
                        'Deleted!',
                        'Your coffee has been deleted.',
                        'success'
                      )
                }
            })
            }
          });

       }

const {name, price, taste, photo} = coffee;
    return (
        <div>
            <div className="flex-shrink-0 m-6 relative overflow-hidden bg-[#dfd9c5]  rounded-lg max-w-xs shadow-lg">
    <svg
        className="absolute bottom-0 left-0 mb-8"
        viewBox="0 0 375 283"
        fill="none"
        style={{ transform: "scale(1.5)", opacity: 0.1 }}
    >
        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
    </svg>
    <div className="relative pt-10 px-10 flex items-center justify-center">
        <div
            className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
            style={{
                background: "radial-gradient(black, transparent 60%)",
                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                opacity: 0.2,
            }}
        ></div>
        <img
            className="relative w-40 h-50"
            src={photo}
            alt="Peace Lily"
        />
    </div>
    <div className="relative text-white px-6 pb-4 mt-6">
        <span className=" block font-semibold text-xl">{name}</span>
        <div className="flex justify-between">
            <span className="block opacity-75 -mb-1">{taste}</span>
            <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                ${price}.00
            </span>
        </div>
    </div>
    <div className="relative text-white px-2 pb-4 mt-2">
    <div className="flex justify-center items-center gap-2 ">
  <button className="btn rounded-xl shadow-2xl "><FaEye /></button>
  <button className="btn rounded-xl shadow-2xl "><Link to={`updateCoffee/${coffee._id}`}><FaEdit /></Link></button>
  <button onClick={() => handleDelete(coffee._id) } className="btn rounded-xl shadow-2xl "><MdDelete /></button>
</div>
    </div>
</div>
        </div>
    );
};

export default Coffee;