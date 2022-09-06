let array = [
  { type: "A", value: "Tesla" },
  { type: "C", value: "Dodge" },
  { type: "A", value: "GMC" },
  { type: "B", value: "KIA" },
  { type: "C", value: "Ford" },
  { type: "B", value: "KIA" },
];

let output = [];

array.forEach((item) => {
  const existing = output.filter((value, i) => {
    return value.type == item.type;
  });
  if (existing.length) {
    const existingIndex = output.indexOf(existing[0]);
    output[existingIndex].value = output[existingIndex].value.concat(
      item.value
    );
  } else {
    if (typeof item.value == "string") item.value = [item.value];
    output.push(item);
  }
});

console.log(output);

