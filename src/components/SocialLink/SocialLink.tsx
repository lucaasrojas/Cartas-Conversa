interface SocialLinkProps {
    social: "linkedin",
    redirectTo: string
}

const SocialLink: React.FC<SocialLinkProps> = ({social,redirectTo}) => {
  return (
    <a
      href={redirectTo}
      target="_blank"
      className="socialMediaIcon_link"
      style={{
        color: "#222222",
        border: "1px solid #222222",
        borderRadius: "50%",
        width: 20,
        height: 20,
        padding: 5,
      }}
    >
      <i className={`bx bxl-${social} socialMediaIcon_icon`}></i>
    </a>
  );
};

export default SocialLink