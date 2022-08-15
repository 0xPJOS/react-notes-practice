const Card = (props) => {
  const classes = "card " + props.className;
  return <div class="mx-auto max-w-4xl">{props.children}</div>;
};

export default Card;
