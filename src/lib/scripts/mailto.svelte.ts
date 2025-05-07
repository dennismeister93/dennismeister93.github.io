export function handleContactClick() {
  const user = "dennis.meister93";
  const domain = "yahoo.de";
  const email = `${user}@${domain}`;
  window.location.href = `mailto:${email}`;
}
