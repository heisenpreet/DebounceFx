const input = document.getElementById("input__field");
const defaultText = document.getElementById("default");
const debounceText = document.getElementById("debounce");

const updateDebounceText = debounce((textForDebounce) => {
  debounceText.textContent = textForDebounce;
});

input.addEventListener("input", (e) => {
  defaultText.textContent = e.target.value;
  updateDebounceText(e.target.value);
});

function debounce(textForDebounce, delay = 1000) {
  let timer;
  return (...text) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      textForDebounce(...text);
    }, delay);
  };
}
