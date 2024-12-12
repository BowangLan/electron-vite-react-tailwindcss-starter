export const NAVBAR_HEIGHT = 56;

function SidebarTitleBar() {
  return (
    <div
      id="sidebar-title-bar"
      className="flex-none flex flex-row items-center"
      style={{
        height: NAVBAR_HEIGHT,
      }}
    >
    </div>
  );
}

export default function Navbar() {
  return (
    <div
      id="navbar"
      className="flex-none w-full flex flex-row items-center"
      style={{
        height: NAVBAR_HEIGHT,
        paddingLeft: 72,
      }}
    >
      <SidebarTitleBar />
    </div>
  );
}
