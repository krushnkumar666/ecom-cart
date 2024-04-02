const Profile = () => {
  return (
    <div>
      <section className="py-16">
        <div className="border-b border-solid border-gray-300 mt-10 pb-5">
          <h2 className="ml-20 font-semibold text-xl">Account</h2>
          <p className="ml-20">Krushna</p>
        </div>
        <div className="flex mr-5">
          <div className="mr-3 pr-10 border-r border-solid ml-20">
            <div className="p-6 pl-0 border-b">
              {" "}
              <p className="text-sm">Overview</p>
            </div>
            <div className="pl-0 p-6 border-b">
              {" "}
              <p className="text-sm mb-3 text-gray-500">ORDERS</p>{" "}
              <p className="text-sm"> Order & Returns</p>{" "}
            </div>
            <div className="pl-0 p-6 border-b text-sm">
              <p className="mb-3 text-gray-500">CREDITS</p>
              <p>Coupons</p>
              <p>Myntra Credit</p>
              <p>MynCash</p>
            </div>
            <div className="pl-0 p-6 border-b text-sm">
              <p className="mb-3 text-gray-500">ACCOUNT</p>
              <p>Profile</p>
              <p>Saved Cards</p>
              <p>Saved UPI</p>
              <p>Saved Wallets/BNPL</p>
              <p>Addresses</p>
              <p>Myntra Insider</p>
            </div>
            <div className="pl-0 p-6 border-b text-sm">
              <p className="mb-3 text-gray-500">LEAGAL</p>
              <p>Terms of Use</p>
              <p>Privacy Policy</p>
            </div>
          </div>
          <div className="mt-3 border w-full">
            <h2 className="ml-20 mt-5 border-b pl-5 pr-10 w-[50%] pb-2">
              Profile Details
            </h2>
            <div className="ml-20 mt-10">
              <div className="flex justify-between items-center mb-4 w-[27%]">
                <p>Full Name </p>
                <p>Krushna </p>
              </div>
              <div className="flex justify-between items-center mb-4 w-[30%]">
                <p>Mobile Number</p>
                <p>7391928805 </p>
              </div>
              <div className="flex justify-between items-center mb-4 w-[30%]">
                <p>Email Id </p>
                <p>-Not added-</p>
              </div>
              <div className="flex justify-between items-center mb-4 w-[30%]">
                <p>Gender</p>
                <p>-Not added-</p>
              </div>
              <div className="flex justify-between items-center mb-4 w-[30%]">
                <p>Date of Birth</p>
                <p>-Not added-</p>
              </div>
              <div className="flex justify-between items-center mb-4 w-[30%]">
                <p>Location</p>
                <p>-Not added-</p>
              </div>
              <div className="flex justify-between items-center mb-4 w-[30%]">
                <p>Alternate Mobile</p>
                <p>-Not added-</p>
              </div>
              <div className="flex justify-between items-center mb-4 w-[30%]">
                <p>Hint Name</p>
                <p>-Not added-</p>
              </div>
              <div className="">
                <button className="bg-[#ff3f6c] text-white w-[32%] h-8">
                  EDIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
