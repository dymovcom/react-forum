export const classNames = (
  ...params: (string | Record<string, boolean | undefined> | undefined)[]
): string => {
  const classes: string[] = [];

  params.forEach((param) => {
    if (param) {
      if (typeof param === "string") {
        classes.push(param);
      } else {
        const modClasses = Object.entries(param)
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          .filter(([_, value]) => !!value)
          .map(([className]) => className);

        classes.push(...modClasses);
      }
    }
  });

  return classes.join(" ");
};
