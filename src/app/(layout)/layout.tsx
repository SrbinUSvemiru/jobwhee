function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[#F0F1F4] pb-14  px-[20px] sm:px-[40px] md:px-[120px] lg:px-[240px] lg:pt-[25px] md:pt-[30px] sm:pt-[34px] pt-[30px]  w-full min-h-screen overflow-y-scroll ">
      {children}
    </div>
  );
}

export default Layout;
