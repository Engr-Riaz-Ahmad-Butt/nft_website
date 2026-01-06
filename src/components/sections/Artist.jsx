import React from 'react'

const Artist = () => {
  return (
    <div className="py-8 sm:py-12 md:py-16 px-3 sm:px-6 md:px-8 bg-black">
      <div className="container mx-auto max-w-7xl">
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
          <video
            autoPlay
            loop
            muted
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            src="https://s3-figma-videos-production-sig.figma.com/video/1169272246591235850/TEAM/4d34/85ac/-6535-4e75-ac4c-2608b963ea21?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L7e1~G~BNUpm~TBOWYQCFA1KMnWxzV1xCJbCmG4mPfsp1dBJh3q-G2yHHOO~PdiiyiWfeIjzi6txlqK~BkvYl-FzbEOdvhrdCSx2wIe1vZTJLPKGUEZglwk85ekGZzMJm7SABIazZ5NeCbNFqVE0SUSCc6bvMELCHwa3XBz18ltZV7wUYlf6KN1FZnedgCOUmuWGhPtcR2VVZ6RI2ClGmtrGrUS1SSTxWiDTDCc-NhqFbw89Dzbat6rXVzjk2cKiII-WRC13td48zSMdwN1hrEFMsfVBMX8LciEXPLLpCZE76A~ykAHTwZf4selCd0ZH8w8BUIagVt0~xJnHcMC11w__"
          />
        </div>
      </div>
    </div>
  )
}

export default Artist
