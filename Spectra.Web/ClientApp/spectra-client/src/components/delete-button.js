import DeleteIcon from "@/assets/icons/delete";

const DeleteButton = ({ ...rest }) => {
  return (
    <button {...rest} className="p-2 rounded-full bg-red bg-opacity-15">
      <DeleteIcon />
    </button>
  );
};

export default DeleteButton;
