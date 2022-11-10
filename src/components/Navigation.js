export default function Navigation({ onChange, currentPage }) {
  return (
    <div>
      <div
        onClick={() => onChange("About Me")}
        style={{ backgroundColor: currentPage === "About Me" ? "yellow" : "" }}
      >
        About Me
      </div>
      <div
        onClick={() => onChange("Portfolio")}
        style={{ backgroundColor: currentPage === "Portfolio" ? "yellow" : "" }}
      >
        Portfolio
      </div>
      <div
        onClick={() => onChange("Contact")}
        style={{ backgroundColor: currentPage === "Contact" ? "yellow" : "" }}
      >
        Contact
      </div>
      <div
        onClick={() => onChange("Resume")}
        style={{ backgroundColor: currentPage === "Resume" ? "yellow" : "" }}
      >
        Resume
      </div>
    </div>
  );
}
