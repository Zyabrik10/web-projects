import sound from '../../audio/click/click.mp3';

export const Clicker = ({ earnMoney, buttonColor }) => {
  const handleClick = () => {
    earnMoney();
    new Audio(sound).play();
  };

  return (
    <button
      className="clicker-button global-button"
      onClick={handleClick}
      style={{
        background: buttonColor,
      }}
    >
      click
    </button>
  );
};
