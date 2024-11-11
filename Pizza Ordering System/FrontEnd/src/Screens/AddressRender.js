import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { createUrl, getConfig } from "../utils/utils";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function AddressRender({ address, loadAddress }) {
  const url = createUrl("/placeOrder");
  const userName = sessionStorage.getItem("userName");
  const addressId = address.id;
  const config = getConfig(sessionStorage.getItem("jwtToken"));
  const history = useHistory();

  const handleDeliverHere = () => {
    // Store the selected address in session storage
    sessionStorage.setItem('selectedAddress', JSON.stringify(address));

    // Navigate to the payment page
    history.push('/payment');
  };

  const deleteAddress = (id) => {
    const urlDelete = createUrl("/deleteAddress/" + id);
    axios.delete(urlDelete, config).then((res) => {
      toast.success("Address deleted successfully");
      loadAddress();
    }).catch((err) => {
      console.error(err);
      toast.error("Failed to delete address");
    });
  };

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <p className="card-text">{address.addressLine1}</p>
          <p className="card-text">{address.city}</p>
          <p className="card-text">{address.state}</p>
          <p className="card-text">{address.pinCode}</p>

          <button
            type="button"
            className="btn btn-success"
            onClick={handleDeliverHere}
          >
            Deliver here
          </button>

          <button
            type="button"
            className="btn btn-danger"
            onClick={() => deleteAddress(address.id)}
          >
            Delete
          </button>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default AddressRender;
