import React from "react";

const Service = () => {
  return (
    <section id="services" className="font-montserrat pb-12 -mt-24 dark:bg-dark lg:pb-[90px] ">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-black">
                My Services
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-black sm:text-4xl md:text-[40px]">
                What I Offer
              </h2>
              
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <ServiceCard
            title="Local SEO"
            details="I'll enhance your business's local visibility by optimizing Google My Business and leveraging targeted local SEO tactics."
            icon={
              <svg 
             fill="#fff" 
             height="36" 
             width="36" 
             version="1.1" id="Capa_1" 
             xmlns="http://www.w3.org/2000/svg" 
             viewBox="0 0 315.289 315.289" 
              stroke="#fff"><g 
              id="SVGRepo_bgCarrier" 
              stroke-width="0"></g><g 
              id="SVGRepo_tracerCarrier" 
              stroke-linecap="round" 
              stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier"> <g> 
                <path 
                d="M290.012,95.991c-3.629,7.01-7.824,14.115-12.246,21.031l-1.756,2.72c-3.723,5.708-7.569,11.257-11.343,16.485 c14.51,8.949,22.596,19.327,22.596,29.444c0,12.723-12.775,25.861-35.051,36.046c-7.314,3.344-15.367,6.236-23.97,8.676 c1.678-11.29,2.717-23.054,3.084-35.087c-0.849,0.231-1.727,0.365-2.625,0.365c-2.895,0-5.648-1.255-7.547-3.44 c-1.376-1.583-4.934-5.721-9.724-11.623c0.028,1.684,0.054,3.369,0.054,5.063c0,17.288-1.48,34.029-4.283,49.556 c-15.526,2.802-32.267,4.283-49.554,4.283c-17.29,0-34.032-1.48-49.561-4.283c-2.802-15.527-4.282-32.268-4.282-49.556 s1.48-34.029,4.282-49.556c15.528-2.802,32.271-4.283,49.561-4.283c6.46,0,12.843,0.207,19.115,0.612 c-4.195-6.804-8.103-13.727-11.412-20.507c-2.558-0.063-5.123-0.105-7.703-0.105c-15.396,0-30.438,1.12-44.727,3.243 c2.439-8.604,5.332-16.657,8.676-23.971c10.185-22.274,23.323-35.05,36.046-35.051c0.001,0,0.002,0,0.003,0 c0.245,0,0.491,0.014,0.737,0.023c2.158-7.064,5.347-13.683,9.401-19.672c-3.351-0.225-6.729-0.351-10.137-0.351 c-0.001,0-0.001,0-0.002,0h-0.001c-0.001,0-0.002,0-0.003,0C75.143,16.056,8.026,83.173,8.026,165.671 c0,82.498,67.116,149.615,149.615,149.618c0.001,0,0.002,0,0.003,0h0.001c0.001,0,0.001,0,0.002,0 c82.498,0,149.615-67.118,149.615-149.618C307.263,140.525,301.017,116.813,290.012,95.991z M114.175,43.561 c-3.869,5.612-7.476,12.028-10.768,19.227C98.425,73.686,94.34,85.98,91.2,99.229c-13.247,3.14-25.541,7.224-36.439,12.206 c-7.199,3.292-13.617,6.899-19.229,10.769C48.586,85.644,77.615,56.615,114.175,43.561z M63.078,129.624 c7.314-3.344,15.366-6.235,23.969-8.675c-2.123,14.287-3.242,29.327-3.242,44.722c0,15.395,1.119,30.434,3.242,44.721 c-8.603-2.439-16.655-5.331-23.968-8.675c-22.276-10.186-35.052-23.324-35.052-36.046 C28.026,152.948,40.802,139.809,63.078,129.624z M35.532,209.137c5.612,3.869,12.03,7.477,19.229,10.769 c10.897,4.982,23.191,9.067,36.439,12.207c3.14,13.248,7.225,25.543,12.207,36.441c3.292,7.199,6.899,13.615,10.768,19.227 C77.615,274.727,48.585,245.697,35.532,209.137z M157.645,295.289c-0.001,0-0.002,0-0.003,0 c-12.723-0.001-25.861-12.777-36.046-35.051c-3.344-7.314-6.236-15.367-8.676-23.971c14.289,2.123,29.33,3.243,44.727,3.243 c15.394,0,30.433-1.119,44.719-3.242c-2.439,8.604-5.332,16.656-8.676,23.97C183.506,282.513,170.367,295.289,157.645,295.289z M201.11,287.784c3.869-5.612,7.478-12.03,10.77-19.23c4.983-10.898,9.068-23.192,12.208-36.441 c13.248-3.139,25.543-7.225,36.441-12.207c7.199-3.292,13.616-6.899,19.228-10.769C266.703,245.7,237.672,274.731,201.11,287.784z"></path> <path d="M229.034,154.702c0.898,0,1.749-0.402,2.319-1.097c9.218-11.23,55.2-68.64,55.2-96.088C286.553,25.802,260.75,0,229.035,0 c-31.715,0-57.517,25.802-57.517,57.517c0,27.459,45.98,84.861,55.197,96.088C227.285,154.3,228.136,154.702,229.034,154.702z M198.035,54.169c0-17.093,13.907-31,31-31c17.093,0,31,13.907,31,31s-13.907,31-31,31 C211.942,85.169,198.035,71.263,198.035,54.169z"></path>
                 </g> </g></svg>
            }
          />
          <ServiceCard
            title="On Page SEO"
            details="I'll boost your site's relevance and authority with on-page SEO, optimizing content, meta tags, and images for better search engine rankings.
            "
            icon={
              <svg fill="#fff" 
              height="36" 
              width="36" 
              version="1.1" 
              id="Layer_1" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 512 512" 
              stroke="#fff"><g 
              id="SVGRepo_bgCarrier" 
              stroke-width="0"></g><g 
              id="SVGRepo_tracerCarrier" 
              stroke-linecap="round" 
              stroke-linejoin="round"></g><g 
              id="SVGRepo_iconCarrier"> <g> <g> <g> <path
              d="M490.667,0H21.333C9.551,0,0,9.551,0,21.333v128v341.333C0,502.449,9.551,512,21.333,512h469.333 c11.782,0,21.333-9.551,21.333-21.333V149.333v-128C512,9.551,502.449,0,490.667,0z M42.667,42.667h426.667V128H42.667V42.667z M469.333,469.333H42.667V170.667h426.667V469.333z"></path> <path d="M85.333,64C73.557,64,64,73.557,64,85.333s9.557,21.333,21.333,21.333s21.333-9.557,21.333-21.333S97.109,64,85.333,64z"></path> <path d="M149.333,64C137.557,64,128,73.557,128,85.333s9.557,21.333,21.333,21.333s21.333-9.557,21.333-21.333 S161.109,64,149.333,64z"></path> <path d="M213.333,64C201.557,64,192,73.557,192,85.333s9.557,21.333,21.333,21.333s21.333-9.557,21.333-21.333 S225.109,64,213.333,64z"></path> <path d="M106.667,426.667h298.667c11.782,0,21.333-9.551,21.333-21.333V384c0-94.257-76.41-170.667-170.667-170.667 S85.333,289.743,85.333,384v21.333C85.333,417.115,94.885,426.667,106.667,426.667z M256,256c70.693,0,128,57.307,128,128 h-76.497l27.582-27.582c8.331-8.331,8.331-21.839,0-30.17c-8.331-8.331-21.839-8.331-30.17,0L247.163,384H128 C128,313.307,185.307,256,256,256z"></path> </g> </g> </g> </g></svg>
            }
          />

<ServiceCard
            title="Technical SEO"
            details="I'll enhance your website's foundation with technical SEO, focusing on site speed, mobile-friendliness, and secure, crawlable structures for better rankings."
            icon={
              <svg 
              height="36" 
              width="36"
              viewBox="0 0 16 16" 
              version="1.1" 
              xmlns="http://www.w3.org/2000/svg"  
              fill="#fff" stroke="#fff">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> 
                <path d="M14.706,4.206l-3.912-3.912C10.606,0.106,10.353,0,10.088,0H1v7h2V2h7v3h3v9H9v2h6V4.916C15,4.65,14.894,4.394,14.706,4.206 z M7.592,12.385L9,12.15v-1.288l-1.408-0.231c-0.069-0.25-0.166-0.482-0.288-0.697L8.137,8.77l-0.91-0.91L6.066,8.692 C5.847,8.573,5.618,8.473,5.377,8.407L5.146,7H3.857L3.626,8.407C3.382,8.473,3.15,8.573,2.934,8.692L1.771,7.86L0.86,8.77 l0.832,1.163c-0.119,0.219-0.219,0.447-0.285,0.691L0,10.856v1.288l1.408,0.231c0.066,0.244,0.166,0.475,0.285,0.691L0.86,14.23 l0.91,0.91l1.164-0.832c0.219,0.119,0.447,0.219,0.691,0.285L3.857,16h1.289l0.231-1.407c0.244-0.066,0.476-0.166,0.688-0.285 l1.164,0.832l0.91-0.91l-0.829-1.154C7.426,12.857,7.527,12.629,7.592,12.385z M4.492,12.788c-0.71,0-1.289-0.579-1.289-1.288 s0.579-1.288,1.289-1.288c0.71,0,1.289,0.575,1.289,1.288S5.202,12.788,4.492,12.788z"></path> </g></svg>   }
          />
          <ServiceCard
            title="Off Page SEO"
            details="I'll strengthen your online presence through off-page SEO, building high-quality backlinks and enhancing social media engagement to improve rankings."
            icon={
             <svg 
             height="36" 
             width="36" 
             version="1.1" 
             id="_x32_" 
             xmlns="http://www.w3.org/2000/svg"  
             viewBox="0 0 512 512" 
             fill="#fff" stroke="#fff"><g 
             id="SVGRepo_bgCarrier" stroke-width="0"></g>
             <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
             <g id="SVGRepo_iconCarrier">  <g> <path 
             className="st0" d="M61.936,345.186h388.128c14.81,0,26.822-12.019,26.822-26.828V89.967c0-14.797-12.012-26.81-26.822-26.81 H61.936c-14.81,0-26.81,12.012-26.81,26.81v228.39C35.127,333.167,47.126,345.186,61.936,345.186z M76.126,99.189h359.749v203.649 H76.126V99.189z"></path> <path className="st0" d="M508.025,419.609l-47.841-42.468c-3.076-2.722-7.5-4.266-12.171-4.266H63.98 c-4.664,0-9.095,1.544-12.164,4.266L3.968,419.609C1.405,421.874,0,424.792,0,427.811v14.797c0,3.456,3.608,6.234,8.064,6.234 h495.874c4.468,0,8.063-2.778,8.063-6.234v-14.797C512,424.792,510.588,421.874,508.025,419.609z M201.137,424.621l13.848-18.721 h87.733l13.829,18.721H201.137z"></path> <path className="st0" d="M189.143,200.96l-4.442-0.633c-11.374-1.588-15.449-5.55-15.449-11.354c0-6.545,4.69-11.241,13.221-11.241 c7.038,0,13.342,2.095,20.139,6.544l1.728-0.373l5.936-9.146l-0.253-1.721c-6.671-5.069-16.683-8.392-27.177-8.392 c-17.297,0-28.417,10.113-28.417,25.322c0,13.956,9.139,21.74,25.322,23.962l4.456,0.62c11.608,1.601,15.31,5.55,15.31,11.607 c0,7.032-5.804,12.108-15.81,12.108c-9.392,0-17.423-4.57-22.854-8.886l-1.728,0.114l-7.664,8.899l0.246,1.861 c6.551,6.17,18.538,11.101,30.886,11.101c20.892,0,31.638-11.101,31.638-26.05C214.232,210.833,205.327,203.168,189.143,200.96z"></path> <polygon className="st0" points="229.928,165.986 228.693,167.219 228.693,248.776 229.928,250.01 282.554,250.01 283.794,248.776 283.794,238.149 282.554,236.915 244.016,236.915 243.275,236.162 243.275,214.915 244.016,214.175 276.51,214.175 277.75,212.94 277.75,202.314 276.51,201.08 244.016,201.08 243.275,200.326 243.275,179.827 244.016,179.087 282.554,179.087 283.794,177.846 283.794,167.219 282.554,165.986 "></polygon> <path className="st0" d="M328.54,164.644c-14.462,0-25.329,6.905-29.658,20.246c-1.728,5.19-2.228,9.886-2.228,23.107 c0,13.222,0.5,17.918,2.228,23.108c4.329,13.342,15.196,20.246,29.658,20.246c14.576,0,25.436-6.905,29.766-20.246 c1.734-5.19,2.234-9.886,2.234-23.108c0-13.221-0.5-17.917-2.234-23.107C353.977,171.549,343.116,164.644,328.54,164.644z M344.224,227.263c-2.348,6.81-7.284,11-15.683,11c-8.284,0-13.221-4.19-15.576-11c-0.981-3.089-1.481-7.412-1.481-19.266 c0-11.987,0.5-16.177,1.481-19.278c2.354-6.797,7.291-10.987,15.576-10.987c8.399,0,13.335,4.19,15.683,10.987 c0.981,3.101,1.494,7.291,1.494,19.278C345.718,219.852,345.205,224.174,344.224,227.263z"></path> </g> </g></svg>
            }
          />
       
          <ServiceCard
            title="Content Writing/ Management"
            details="I'll enhance your brand with content writing/management, creating compelling, SEO-optimized content that engages audiences."
            icon={
            
                
              <svg
              height="36" 
              width="36" 
              version="1.1" id="Capa_1" 
              xmlns="http://www.w3.org/2000/svg"  
              viewBox="0 0 452.986 452.986"  
              fill="#000000"><g 
              id="SVGRepo_bgCarrier" 
              stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" 
              stroke-linecap="round" 
              stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier"> <g> <g> <g> 
                <path style={{ fill: '#fff' }} d="M403.87,0H49.095C22.11,0,0,22.11,0,49.117v354.796c0,26.963,22.11,49.074,49.095,49.074H403.87 c27.007,0,49.117-22.11,49.117-49.074V49.117C452.986,22.11,430.876,0,403.87,0z M415.82,410.859H37.188V101.836H415.82V410.859z "></path> 
                <circle style={{ fill: '#fff' }} cx="124.765" cy="169.029" r="36.843"></circle> 
                <rect x="192.282" y="153.692" style={{ fill: '#fff' }} width="161.716" height="30.695"></rect> 
                <circle style={{ fill: '#fff' }} cx="124.765" cy="259.065" r="36.843"></circle> 
                <rect x="192.282" y="243.728" style={{ fill: '#fff' }} width="161.716" height="30.674"></rect> 
                <circle style={{ fill: '#fff' }} cx="124.765" cy="349.123" r="36.843"></circle> 
                <rect x="192.282" y="333.765" style={{ fill: '#fff' }} width="161.716" height="30.674"></rect> 
                </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> 
                <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g> </g></svg>
                
                
                }
          />
          <ServiceCard
            title="International SEO"
            details="I'll expand your global reach with international SEO, tailoring strategies to different languages and cultures to maximize your website's worldwide visibility."
            icon={
             <svg fill="#ffffff" height="36px" width="36px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 299.236 299.236" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M193.084,271.732c2.428-3.522,4.753-7.362,6.962-11.512c-1.542,0.11-3.091,0.184-4.652,0.184 c-5.905,0-11.684-0.811-17.224-2.345c-8.743,13.617-18.769,21.177-28.551,21.178c-0.001,0-0.002,0-0.003,0 c-12.723-0.001-25.861-12.777-36.046-35.051c-3.345-7.314-6.236-15.367-8.676-23.971c10.399,1.545,21.199,2.551,32.242,2.989 c-2.953-6.368-4.843-13.208-5.571-20.301c-10.889-0.664-21.453-1.914-31.505-3.728c-2.802-15.527-4.282-32.268-4.282-49.556 s1.48-34.029,4.282-49.556c15.528-2.802,32.271-4.283,49.56-4.283c17.288,0,34.027,1.48,49.554,4.282 c1.866,10.34,3.132,21.226,3.779,32.446c7.105,0.829,13.949,2.815,20.303,5.882c-0.408-11.48-1.438-22.702-3.041-33.494 c8.604,2.439,16.656,5.332,23.97,8.676c22.275,10.185,35.051,23.324,35.051,36.047c0,10.006-7.905,20.267-22.115,29.148 c1.989,7.077,2.74,14.427,2.261,21.714c4.469-2.338,8.594-4.807,12.349-7.396c-4.877,13.66-11.985,26.267-20.882,37.384 l14.219,14.218c21.338-25.866,34.169-58.997,34.169-95.069C299.236,67.118,232.119,0,149.621,0c-0.001,0-0.001,0-0.001,0h-0.002 h-0.003C67.116,0.004,0,67.12,0,149.618s67.116,149.615,149.615,149.618h0.003h0.001c0,0,0.001,0,0.002,0 c35.646,0,68.414-12.538,94.144-33.426l-14.232-14.232C218.644,260.131,206.364,266.99,193.084,271.732z M271.73,106.15 c-5.612-3.869-12.029-7.477-19.229-10.768c-10.897-4.983-23.192-9.068-36.44-12.208c-3.14-13.248-7.225-25.542-12.208-36.44 c-3.292-7.2-6.9-13.617-10.77-19.23C229.645,40.558,258.677,69.588,271.73,106.15z M149.616,20c0.001,0,0.002,0,0.003,0 c12.722,0,25.859,12.776,36.046,35.052c3.344,7.313,6.236,15.366,8.676,23.969c-14.287-2.123-29.326-3.242-44.72-3.242 c-15.396,0-30.437,1.12-44.726,3.243c2.439-8.604,5.331-16.657,8.676-23.971C123.755,32.777,136.894,20.001,149.616,20z M106.149,27.507c-3.869,5.612-7.477,12.029-10.768,19.228c-4.982,10.898-9.068,23.192-12.207,36.441 C69.927,86.315,57.633,90.4,46.735,95.382c-7.199,3.292-13.617,6.899-19.229,10.769C40.56,69.591,69.589,40.562,106.149,27.507z M55.052,113.571c7.313-3.344,15.365-6.235,23.969-8.675c-2.123,14.287-3.242,29.327-3.242,44.722 c0,15.395,1.119,30.434,3.242,44.722c-8.604-2.439-16.655-5.332-23.969-8.675C32.776,175.479,20,162.341,20,149.618 C20,136.895,32.776,123.756,55.052,113.571z M27.506,193.085c5.612,3.869,12.03,7.477,19.23,10.769 c10.897,4.982,23.191,9.067,36.438,12.207c3.14,13.248,7.226,25.543,12.208,36.441c3.291,7.199,6.898,13.616,10.768,19.228 C69.589,258.675,40.56,229.645,27.506,193.085z"></path> <path d="M239.083,230.723c17.262-21.835,15.831-53.712-4.32-73.864c-10.516-10.516-24.497-16.307-39.369-16.307 c-14.871,0-28.852,5.792-39.367,16.307c-10.517,10.516-16.309,24.497-16.309,39.369s5.792,28.853,16.308,39.369 c10.516,10.516,24.497,16.307,39.368,16.307c12.682,0,24.708-4.225,34.498-11.985l46.21,46.21c1.27,1.269,2.934,1.904,4.597,1.904 c1.663,0,3.327-0.635,4.597-1.904c2.538-2.539,2.538-6.654,0-9.192L239.083,230.723z M225.577,226.398 c-0.002,0.002-0.005,0.004-0.007,0.006c-0.002,0.002-0.004,0.004-0.006,0.007c-8.061,8.056-18.774,12.493-30.171,12.493 c-11.398,0-22.115-4.439-30.176-12.5c-8.061-8.06-12.5-18.778-12.5-30.177c0-11.399,4.439-22.116,12.501-30.176 c8.06-8.061,18.776-12.499,30.175-12.499c11.399,0,22.116,4.439,30.177,12.499C242.207,182.688,242.209,209.757,225.577,226.398z"></path> <path d="M207.596,181.525l-7.359-14.908c-0.722-1.463-2.212-2.39-3.843-2.39s-3.121,0.926-3.843,2.39l-7.359,14.908l-16.452,2.39 c-1.614,0.234-2.956,1.365-3.46,2.917c-0.504,1.551-0.083,3.255,1.084,4.393l11.906,11.607l-2.81,16.386 c-0.275,1.607,0.386,3.232,1.707,4.191c1.319,0.96,3.068,1.086,4.512,0.327l14.715-7.737l14.715,7.737 c0.627,0.33,1.312,0.493,1.994,0.493c0.889,0,1.773-0.276,2.52-0.819c1.319-0.958,1.98-2.583,1.705-4.191l-2.81-16.386 l11.906-11.607c1.167-1.138,1.588-2.842,1.084-4.393c-0.504-1.552-1.846-2.683-3.46-2.917L207.596,181.525z"></path> </g> </g></svg>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Service;

const ServiceCard = ({ icon, title, details }) => {
  return (
    <>
      <div className="w-full h-50 px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-9 rounded-[20px] bg-white p-4 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10">
          <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-black">
            {icon}
          </div>
          <h4 className="mb-[14px] text-2xl font-semibold text-black ">
            {title}
          </h4>
          <p className="text-black dark:text-dark-6">{details}</p>
        </div>
      </div>
    </>
  );
};

