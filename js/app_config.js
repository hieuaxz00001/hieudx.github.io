const PERFIX_PRINT_THIS = '/cv/'
const TIME_ALERT = 2000
const INFOR_PRODUCT_PRIVATE_VN = 'Sản phẩm chỉ được sử dụng trong nội bộ.'
const INFOR_PRODUCT_PRIVATE_EN = 'Product is for internal use only.'
const INFOR_CV_VN = {
  imgCV: 'public/product/user.jpg',
  name: 'Đỗ Xuân Hiếu',
  job: 'Software Developer',
  contacts: [
    {
      icon: '<i class="fas fa-mobile-alt"></i>',
      value: '0967840437',
      href: 'tel:0967840437'
    },

    {
      icon: '<i class="far fa-envelope"></i>',
      value: 'anhhieuaxy@gmail.com',
      href: 'mailto:anhhieuaxy@gmail.com'
    },
    {
      icon: '<i class="fab fa-facebook-square"></i>',
      value: 'facebook.com/xuan.hieu.9638/',
      href: 'https://www.facebook.com/xuan.hieu.9638/'
    },
    {
      icon: '<i class="fab fa-github"></i>',
      value: 'github.com/hieuaxz00001',
      href: 'https://github.com/hieuaxz00001'
    }
  ],
  skills: [
    {
      icon: '<i class="fab fa-java"></i>',
      value: 'Java Core/ JSP/ Servlet / Collections'
    },
    {
      icon: '<i class="fas fa-leaf"></i>',
      value: 'Spring Framework'
    },
    {
      icon: '<i class="fab fa-html5"></i>',
      value: 'HTML'
    },
    {
      icon: '<i class="fab fa-css3-alt"></i>',
      value: 'CSS'
    },

    {
      icon: '<i class="fab fa-php"></i>',
      value: 'PHP/ Laravel/ Cake php'
    },
    {
      icon: '<i class="fab fa-react"></i>',
      value: 'ReactJS'
    },
    {
      icon: '<i class="fab fa-js"></i>',
      value: 'JavaScript/ Jquery'
    },
    {
      icon: '<i class="fab fa-bootstrap"></i>',
      value: 'Bootstrap 4.x/5.x'
    },
    {
      icon: '<i class="fas fa-database"></i>',
      value: 'SQL Server/ MySQL/ GraphQL'
    }
  ],
  descriptionCV:
    'Tôi là Đỗ Xuân Hiếu. Hiện tại tôi là một Software Developer. Tôi là sinh viên năm cuối trường Đại học Xây Dựng Hà Nội và từng tham gia giảng dạy ngôn ngữ lập trình JAVA cơ bản tại Viện Tin học Xây Dựng trực thuộc trường Đại học Xây Dựng. ' +
    'Với các kinh nghiệm từng bước triển khai một hệ thống website từ bước phân tích yêu cầu khách hàng cho đến khi sản phẩm được triển khai, cùng với tinh thần học hỏi, trách nhiệm trong công việc tôi hy vọng sẽ được làm việc cùng với anh/chị góp phần nhỏ vào sự phát triển của công ty.',
  experiences: [
    {
      name: 'Website quản lý khóa học SPEC',
      company: 'Viện tin học Xây Dựng',
      description:
        'Webiste quản lý khóa học, bài viết. Cho phép học viên đăng ký khóa học, quản lý giảng viên, quản lý học viên...',
      info: [
        {
          name: 'Quy mô dự án',
          value: '2 người.'
        },
        {
          name: 'Vị trí/ Trách nhiệm',
          value: 'Trưởng nhóm/ Tạo cấu trúc, Triển khai.'
        },
        {
          name: 'Công nghệ sử dụng',
          value: 'MySQL, Spring Framework, HTML, CSS, JS.'
        }
      ]
    },
    {
      name: 'App: Đánh giá phơi nhiễm điện tử',
      company: 'Công ty Cổ phần Tư vấn Thiết kế Viettel - Viettel VTK',
      description:
        'Đánh giá mức độ phơi nhiễm điện tử, thu thập thông tin về mức độ ảnh hưởng của các trạm thu phát sóng của Viettel. Phân tích, đánh giá, mức độ ảnh hưởng hỗ trợ công ty đưa ra các giải pháp khắc phục hiệu quả',
      info: [
        {
          name: 'Quy mô dự án',
          value: '3 người.'
        },
        {
          name: 'Vị trí/ Trách nhiệm',
          value: 'Thành viên/ Phân tích, Triển khai.'
        },
        {
          name: 'Công nghệ sử dụng',
          value: 'Android, MySQL.'
        }
      ]
    },
    {
      name: 'App: VTK MAP',
      company: 'Công ty Cổ phần Tư vấn Thiết kế Viettel - Viettel VTK',
      description:
        'App di động trên android hỗ trợ nhân viên tại hiện trường nghiệm thu xác định tọa độ, khoảng cách, vị trí các tuyến cáp, các cột thu phát sóng, vẽ mạng lưới tuyến cáp... Sau đó gửi về tổng công ty để tiếp tục xử lý. Chia sẻ, quản lý các file tài nguyên trên drive',
      info: [
        {
          name: 'Quy mô dự án',
          value: '2 người.'
        },
        {
          name: 'Vị trí/ Trách nhiệm',
          value: 'Thành viên/ Tạo cấu trúc, lập trình adroid.'
        },
        {
          name: 'Công nghệ sử dụng',
          value: 'Android, Googgle Map, Google Drive, MySQL.'
        }
      ]
    },
    {
      name: 'App: EC VTK',
      company: 'Công ty Cổ phần Tư vấn Thiết kế Viettel - Viettel VTK',
      description:
        'App di động trên android hỗ trợ quản lý thông tin các trạm phát sóng, cột ăng ten. Đồng bộ dữ liệu với tổng công ty.',
      info: [
        {
          name: 'Quy mô dự án',
          value: '2 người.'
        },
        {
          name: 'Vị trí/ Trách nhiệm',
          value: 'Thành viên/ Triển khai lập trình adroid.'
        },
        {
          name: 'Công nghệ sử dụng',
          value: 'Android, Google Drive, MySQL.'
        }
      ]
    },
    {
      name:
        'Dự án nghiên cứu “Tối ưu hóa chất lượng môi trường xây dựng tại các khu ở của Việt Nam và Bỉ”',
      company: 'Viện tin học Xây Dựng - Đại sứ quán Việt Nam Bỉ',
      description:
        'App di động trên android và website hỗ trợ quản lý, giám sát, kịp thời dự báo, cảnh báo và công bố diễn biến chất lượng môi trường. Tăng cường năng lực trong hoạt động vận hành, kiểm soát, phân tích xử lý và khai thác dữ liệu quan trắc tự động',
      info: [
        {
          name: 'Quy mô dự án',
          value: '3 người.'
        },
        {
          name: 'Vị trí/ Trách nhiệm',
          value: 'Trưởng nhóm/ Triển khai lập trình web.'
        },
        {
          name: 'Công nghệ sử dụng',
          value: 'Spring framework, RESTful API, HTML, CSS, JS, MySQL, ReactJS,  ArcGis for Javascript'
        }
      ]
    },
    {
      name: 'Quản lý lương nhân viên VTK ',
      company: 'Công ty Cổ phần Tư vấn Thiết kế Viettel - Viettel VTK',
      description:
        'Quản lý lương của toàn bộ nhân viên công ty Viettel VTK. Chấm công, tính toán lương, mail cho nhân viên, lập báo cáo cho giám đốc',
      info: [
        {
          name: 'Quy mô dự án',
          value: '4 người.'
        },
        {
          name: 'Vị trí/ Trách nhiệm',
          value: 'Trưởng nhóm lập trình web/ Lập trình Web.'
        },
        {
          name: 'Công nghệ sử dụng',
          value: 'Spring framework, RESTful API,HTML, CSS, JS, MySQL, KnockoutJS'
        }
      ]
    },
    {
      name: 'Quản lý bán hàng Memart.vn',
      company: 'Viện tin học Xây Dựng',
      description:
        'Website quản lý bán hàng, quản lý hàng hóa suất nhập kho, quản lý hóa đơn, quản lý khách hàng, thống kê theo thời gian...',
      info: [
        {
          name: 'Quy mô dự án',
          value: '1 người.'
        },
        {
          name: 'Vị trí/ Trách nhiệm',
          value: 'Phát triển/ Lập trình web.'
        },
        {
          name: 'Công nghệ sử dụng',
          value: 'Spring framework, RESTful API,HTML, CSS, JS, MySQL, KnockoutJS'
        }
      ]
    },
    {
      name: 'Quản lý tuyến cáp, hệ thống cáp quang',
      company: 'CTy cổ phần tư vấn xây dựng BƯU ĐIỆN POTECO - VNPT',
      description:
        'Hỗ trợ xây dựng bản đồ, quản lý hệ thống tuyến cáp quang.',
      info: [
        {
          name: 'Quy mô dự án',
          value: '1 người.'
        },
        {
          name: 'Vị trí/ Trách nhiệm',
          value: 'Phát triển/ Lập trình web.'
        },
        {
          name: 'Công nghệ sử dụng',
          value: 'ReactJS, ArcGis for Javascript'
        }
      ]
    }
  ],
  products: [
    {
      img: './public/product/spec.png',
      name: 'Website quản lý khóa học SPEC',
      description: 'Website quản lý khóa học SPEC',
      href: 'https://spec.edu.vn/'
    },
    {
      img: './public/product/pndt.png',
      name: 'APP Phơi nhiễm',
      description: 'Đánh giá phơi nhiễm điện tử',
      href: ''
    },
    
    {
      img: './public/product/ec.png',
      name: 'APP EC',
      description: 'Quản lý thông tin các trạm ',
      href: ''
    },
    {
      img: './public/product/e_tool.png',
      name: 'Tối ưu hóa chất lượng môi trường',
      description: 'Tối ưu hóa chất lượng môi trường ',
      href: 'http://spec.edu.vn:3000/'
    },
    {
      img: './public/product/banhang.png',
      name: 'Bán hàng Memart.vn',
      description: 'bán hàng Memart.vn ',
      href: 'http://banhang.memart.vn:6060/'
    },
    {
      img: './public/product/poteco.png',
      name: 'Quản lý tuyến cáp, hệ thống cáp quang',
      description: 'Quản lý tuyến cáp, hệ thống cáp quang',
      href: 'http://spec.edu.vn:3002/'
    },
    {
      img: './public/product/rdsic.png',
      name: 'Quản lý giáo dục Rdsic',
      description: 'Quản lý giáo dục Rdsic',
      href: 'https://rdsic.edu.vn/'
    },
    {
      img: './public/product/rdone.png',
      name: 'Blog xây dựng Rdone',
      description: 'Blog xây dựng Rdone',
      href: 'https://rdone.net/'
    },
    
  ]
}

const INFOR_CV_EN = {
  imgCV: 'public/img-cv.jpg',
  name: 'Đỗ Xuân Hiếu',
  job: 'Software Developer',
  contacts: [
    {
      icon: '<i class="fas fa-mobile-alt"></i>',
      value: '0966186222',
      href: 'tel:0966186222'
    },
    {
      icon: '<i class="far fa-envelope"></i>',
      value: 'ntduong10698@gmail.com',
      href: 'mailto:ntduong10698@gmail.com'
    },
    {
      icon: '<i class="fab fa-facebook-square"></i>',
      value: 'facebook.com/duong.nguyentrong.52',
      href: 'https://www.facebook.com/duong.nguyentrong.52'
    },
    {
      icon: '<i class="fab fa-github"></i>',
      value: 'github.com/ntduong10698',
      href: 'https://github.com/ntduong10698'
    }
  ],
  skills: [
    {
      icon: '<i class="fab fa-html5"></i>',
      value: 'HTML'
    },
    {
      icon: '<i class="fab fa-css3-alt"></i>',
      value: 'CSS'
    },
    {
      icon: '<i class="fab fa-js"></i>',
      value: 'JavaScript/ Jquery'
    },
    {
      icon: '<i class="fab fa-bootstrap"></i>',
      value: 'Bootstrap 3.x/4.x'
    },
    {
      icon: '<i class="fab fa-java"></i>',
      value: 'Java Core/ JSP/ Servlet'
    },
    {
      icon: '<i class="fas fa-leaf"></i>',
      value: 'Spring Framework'
    },
    {
      icon: '<i class="fas fa-database"></i>',
      value: 'SQL Server/ MySQL/ MariaDB'
    }
  ],
  descriptionCV:
    'My name is Đỗ Xuân Hiếu. Currently, I am a Software Developer. I graduated from Hanoi University of Science and Technology and participated in teaching Java programming language at the club ITStudent. With the experience of implementing a website system from analysis of customer requirements to the product is deployed and the spirit of learning and responsibility at work, I hope to be working with you makes a small contribution to the development of the company.',
  experiences: [
    {
      name: 'Ha Phat Camera',
      company: 'BK Software Viet Nam., JSC',
      description:
        'The Project about selling web allows customers can find out and order about camera equipment.',
      info: [
        {
          name: 'Project size',
          value: '2 people.'
        },
        {
          name: 'Position/ Responsibilities',
          value: 'Developer/ Create prototype, Implement.'
        },
        {
          name: 'Used Technologies',
          value: 'Spring framework, HTML, CSS, JS, MySQL.'
        }
      ]
    },
    {
      name: 'Manage land use planning information and land prices',
      company: 'TAVI CID CO.,LTD',
      description:
        'The Project that converts digital data and provides management functions for land use planning information and land prices. Use the web GIS to display land use planning maps.',
      info: [
        {
          name: 'Project size',
          value: '4 people.'
        },
        {
          name: 'Position/ Responsibilities',
          value:
            'Developer, Team Leader/ Analysis, Implement, Create prototype.'
        },
        {
          name: 'Used Technologies',
          value: 'Spring framework, HTML, CSS, JS, ArgGIS, WebGIS, SQL Server.'
        }
      ]
    },
    {
      name: 'Natalie PMU',
      company: 'BK Software Viet Nam., JSC',
      description:
        'The Project about web offers information, online and offline courses, articles and facts about cosmetology.',
      info: [
        {
          name: 'Project size',
          value: '4 people.'
        },
        {
          name: 'Position/ Responsibilities',
          value: 'Developer/ Create prototype, Implement.'
        },
        {
          name: 'Used Technologies',
          value: 'Spring framework, HTML, CSS, JS, MySQL.'
        }
      ]
    },
    {
      name: 'AVHH Electrical Equipment',
      company: 'BK Software Viet Nam., JSC',
      description:
        'The Project about web allows customers to find information and order electrical equipment, provide information project of the company and news about electrical equipment.',
      info: [
        {
          name: 'Project size',
          value: '4 people.'
        },
        {
          name: 'Position/ Responsibilities',
          value: 'Developer/ Create prototype, Implement.'
        },
        {
          name: 'Used Technologies',
          value: 'Spring framework, HTML, CSS, JS, MySQL.'
        }
      ]
    },
    {
      name: 'Do Muoi Oriental Medicine',
      company: 'BK Software Viet Nam., JSC',
      description:
        'The Project about web provides information on oriental medicine products, articles, studies, materials.',
      info: [
        {
          name: 'Project size',
          value: '4 people.'
        },
        {
          name: 'Position/ Responsibilities',
          value: 'Developer/ Create prototype, Implement.'
        },
        {
          name: 'Used Technologies',
          value: 'Spring framework, HTML, CSS, JS, MySQL.'
        }
      ]
    },
    {
      name: 'Task Manager',
      company: 'Viettel solutions',
      description:
        'The Project about web manages customer information and employee task.',
      info: [
        {
          name: 'Project size',
          value: '2 people.'
        },
        {
          name: 'Position/ Responsibilities',
          value: 'Developer/ Create prototype, Implement.'
        },
        {
          name: 'Used Technologies',
          value: 'Spring framework, HTML, CSS, JS, MySQL.'
        }
      ]
    },
    {
      name: 'Card Product',
      company: 'TPBank',
      description:
        'Provide and develop card services for individual and corporate customers.',
      info: [
        {
          name: 'Project size',
          value: '10 people.'
        },
        {
          name: 'Position/ Responsibilities',
          value: 'Developer/ Create prototype, Implement.'
        },
        {
          name: 'Used Technologies',
          value: 'Spring framework, Backbase, Docker, Oracle.'
        }
      ]
    }
  ],
  products: [
    {
      img: './public/product/haphat.PNG',
      name: 'Ha Phat Camera',
      description: 'Website selling camera',
      href: 'https://haphatsmarthome.com/'
    },
    {
      img: './public/product/quyhoachbacgiang.png',
      name: 'Manage land use planning information and land prices',
      description: 'Internal website manages land use planning and land prices',
      href: ''
    },
    {
      img: './public/product/nataliepmu.PNG',
      name: 'Natalie PMU',
      description: 'Website cosmetology',
      href: 'https://nataliepmu.com/'
    },
    {
      img: './public/product/theitbidienavhh.PNG',
      name: 'AVHH',
      description: 'Website electrical equipment',
      href: 'https://thietbidienavhh.com/'
    },
    {
      img: './public/product/dongydomuoi.PNG',
      name: 'Do Muoi',
      description: 'Website oriental medicine',
      href: 'https://dev.bksoftwarevn.com/dongydomuoi_com/'
    }
  ]
}
