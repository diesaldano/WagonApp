function HeroImage() {
  return (
    <div>
      
      <div class="w-full h-screen bg-center bg-no-repeat bg-cover" 
       style ={ { backgroundImage: "url("+"https://dummyimage.com/1440X900/ebebeb/450dde"+")" }}>
          <div class="w-full h-screen bg-opacity-50 bg-black flex justify-center items-center">
              <div class="mx-4 text-center text-white">
                  <h1 class="font-bold text-6xl mb-4">This is a test</h1>
                  <h2 class="font-bold text-3xl mb-12">This is a test</h2>

              </div>
          </div>
      </div>
      
    </div>
  );
}

export default HeroImage;