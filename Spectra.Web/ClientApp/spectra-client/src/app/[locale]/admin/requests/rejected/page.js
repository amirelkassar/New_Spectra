import RequestsTable from "../requests-table";

const RequestsPage = () => {
  return (
    <div className="default-page">
      <RequestsTable type={'rejected'} />
    </div>
  );
};

export default RequestsPage;
