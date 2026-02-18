const Title = (props) => {
  return (
    <h2 className="text-sm text-center uppercase tracking-[0.3em] text-gray-800 dark:text-white font-semibold mb-15">
      {props.title}
    </h2>
  );
};

export default Title;