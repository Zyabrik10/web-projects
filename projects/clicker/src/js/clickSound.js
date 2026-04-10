import sound from '../audio/click/click.mp3';

export function clickSound() {
  const audio = new Audio(sound);
  audio.play();
}
