// for all layouts the children is the fuckign page.js component!

export default function GalleryLayout({ children, modal }) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}
