function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[#F0F1F4] pt-[25px] lg:bg-amber-300  w-full min-h-screen overflow-y-scroll ">
      {children}
    </div>
  );
}

export default Layout;
