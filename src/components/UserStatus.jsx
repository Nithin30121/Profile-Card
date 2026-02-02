export default function UserStatus({ status, toggleStatus }) {
  return (
    <div className="status-panel">
      <p>
        Current Status: <strong>{status}</strong>
      </p>

      <button
        onClick={toggleStatus}
        className="toggle-btn"
      >
        Toggle Status
      </button>
    </div>
  );
}
