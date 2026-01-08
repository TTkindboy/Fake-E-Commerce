import Modal from 'react-modal';

const PopupOrderSummary = ({ isModalOpen, closeModal, formData, cartItems, totalPrice, totalItems }) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel="Order Summary"
      className="mt-20 p-6 bg-white rounded-lg shadow-lg"
      overlayClassName="fixed inset-0 bg-black opacity-95"
    >
      <div>
        <h1 className="text-2xl font-semibold mb-4">Order Confirmed!</h1>
        <p>
          Thank you, {formData.yourname}, for shopping with us! <br />
          Your order will be delivered to {formData.address} within 4 working days.
        </p>
        <p className="mt-2">
          <span className="font-semibold">Total Cost:</span> ${totalPrice.toFixed(2)}
          <span className="font-semibold ml-5">Total Items:</span> {totalItems}
        </p>
        <div className="flex flex-col mt-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b py-2">
              <p className="truncate">{item.title}</p>
              <p className="ml-4">Quantity:{item.quantity}</p>
            </div>
          ))}
        </div>
        <button
          onClick={closeModal}
          className="bg-gray-800 text-white p-3 mt-4 rounded-lg hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray"
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default PopupOrderSummary;


// Easy setting to remeber for MODAL

// import Modal from 'react-modal';
// import { useState } from 'react';
// import { BsCheckCircle } from 'react-icons/bs';
// import { FaArrowRightLong } from 'react-icons/fa6';
// import "./Preview.css"

// export default function PreviewModal({ formData }) {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [imageURL, setImageURL] = useState(null);

//   const handlePreview = () => {
//     setIsModalOpen(true);
//     if (formData.heroPicture) {
//       const temporaryURL = URL.createObjectURL(formData.heroPicture);
//       setImageURL(temporaryURL);
//     }
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     if (imageURL) {
//       URL.revokeObjectURL(imageURL);
//       setImageURL(null);
//     }
//   };

//   return (
//     <>
//       <button onClick={handlePreview} className="bg-[#333333] text1-[#d7d2c0] p-4">
//           Preview
//       </button>
//       <Modal
//         isOpen={isModalOpen}
//         onRequestClose={closeModal}
//         contentLabel="Preview"
//         className="fixed top-1/2 left-2/3 transform -translate-x-2/3 -translate-y-1/2 bg-[#FDFFF1] text-black w-7/12 bg-opacity-100 h-auto"
//         overlayClassName="fixed inset-0 bg-[#a9a9a9] opacity-90"
//       >
//         <div className="p-8 flex flex-col gap-5">

//           <div className='flex gap-2 text-sm'>
//             <p className='font-thin'>Opportunities {'>'} </p>
//             {formData.assetClass === 'realEstate' ? (<p className='font-semibold'>Real Estate </p>) : (<></>)}
//             {formData.assetClass === 'privateDebt' ? (<p className='font-semibold'>Private Debt </p>) : (<></>)}
//             {formData.assetClass === 'privateEquity' ? (<p className='font-semibold'>Private Equity </p>) : (<></>)}
//             {formData.assetClass === 'commodities' ? (<p className='font-semibold'>Commodities </p>) : (<></>)}
//           </div>

//           <div className="flex gap-5">
//             <div className='w-1/3'>
//               <div className="im">
//                 <div className="flex bg-black justify-center gap-5">
//                     <div className="rounded-full bg-gray-600 w-[25px] h-[25px] p-1 flex justify-center">
//                         <div className="rounded-full bg-gray-500 w-[15px] h-[15px] p-1 flex justify-center " >
//                             <div className="rounded-full bg-gray-200 w-[10px] ">
                                
//                             </div>
//                         </div>
//                     </div>
//                     <p className="text-white text-xl ">Live</p> 
//                 </div>
//                 {imageURL && <img src={imageURL} alt="img" />}
//               </div>
//             </div>

//             <div className='flex flex-col gap-5 w-2/3'>
//               <p className='text-2xl'>{formData.opportunityName} by {formData.nameOfIssuer}</p>

//               <p className='text-sm font-thin'>{formData.description}</p>

//               {formData.statusOfLand === 'live' ? (
//                 <div className='flex justify-between text-sm'>
//                   <p className='flex items-center gap-1'><BsCheckCircle className='text-green-600' /> Pre-screening</p>
//                   <p className='flex items-center gap-1'><BsCheckCircle className='text-green-600'/> Due-Diligence</p>
//                   <p className='flex items-center gap-1'><BsCheckCircle className='text-green-600'/> Available for Investment</p>
//                 </div>
//               ) : (
//               <div className='flex justify-between text-sm items-center'>
//                 <p className='flex flex-col'>
//                   <p className='flex items-center gap-1'><BsCheckCircle className='text-yellow-500' /> Pre-screening</p>
//                   <p className='text-xs text-center text-gray-500'>Undergoing</p>
//                 </p>
//                 <p className='flex items-center gap-1'><BsCheckCircle /> Due-Diligence</p>
//                 <p className='flex items-center gap-1'><BsCheckCircle /> Available for Investment</p>
//               </div>
//               ) }

//               {formData.cta === 'Contact Us' ? (
//                 <div className="en ">
//                     Contact Us <FaArrowRightLong />
//                 </div>
//               ) : (
//                 <div className="en ">
//                     Explore Now <FaArrowRightLong />
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </Modal>
//     </>
//   );
// }

