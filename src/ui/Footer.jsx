const newDate = new Date();
const year = newDate.getFullYear().toString();

export default function Footer() {
  return (
    <footer className="py-4">
      <p className="text-center">&copy; {year} All right reserved by XYZ company</p>
    </footer>
  );
}
