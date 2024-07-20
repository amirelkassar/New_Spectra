import EditIcon from "@/assets/icons/edit";

const EditButton = ({ ...rest }) => {
  return (
    <button {...rest} className="p-2 rounded-full bg-blueLight">
      <EditIcon />
    </button>
  );
};

export default EditButton;
