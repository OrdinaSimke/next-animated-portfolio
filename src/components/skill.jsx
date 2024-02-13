const Skill = ({ text }) => {
  return (
    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
      {text}
    </div>
  );
};

export default Skill;
