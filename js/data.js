const portfolio = {
  student: {
    name: "Nguyễn Minh Ngọc",
    id: "25100502",
    school: "Trường Đại học Y Dược, Đại học Quốc gia Hà Nội",
    course: "VNU1001_E252029",
    className: "Dược học C - QH.2025.DC",
    major: "Dược học",
    interests: ["Cầu lông", "Nghe nhạc"]
  },
  hobbies: [
    {
      title: "Cầu lông",
      text: "Rèn luyện sức khỏe, phản xạ và tính kỷ luật cá nhân.",
      icon: "shuttle"
    },
    {
      title: "Nghe nhạc",
      text: "Thư giãn, cân bằng tinh thần và tăng khả năng tập trung.",
      icon: "headphone"
    }
  ],
  modules: [
    {
      code: "01",
      title: "Quản lý tệp và thư mục",
      focus: "Nền tảng lưu trữ học tập",
      category: "Dược học",
      pdf: "files/bai-01.pdf",
      sourceFile: "Bài 1.pdf",
      featured: false,
      tags: ["Mục tiêu", "Quá trình", "Kết quả", "Bài học", "Ứng dụng"],
      summary:
        "Rèn luyện kỹ năng tạo thư mục, tạo tệp văn bản, đổi tên, sao chép, di chuyển và khôi phục dữ liệu.",
      sections: {
        "Mục tiêu":
          "Rèn luyện kỹ năng quản lý tệp và thư mục trên máy tính, biết cách tạo thư mục, tạo tệp văn bản, đổi tên, tạo thư mục con, sao chép và di chuyển dữ liệu.",
        "Tóm tắt quá trình":
          "Sinh viên thực hành mở File Explorer, truy cập ổ đĩa, tạo thư mục ThucHanh_NguyenMinhNgoc, tạo tệp GhiChu.txt, đổi tên thành GhiChuQuanTrong.txt, tạo thư mục TaiLieu và thực hiện các thao tác sao chép, di chuyển, xóa hoặc khôi phục tệp.",
        "Kết quả":
          "Hoàn thành chuỗi thao tác quản lý tệp cơ bản. Sinh viên biết cách tổ chức dữ liệu học tập theo cấu trúc rõ ràng, hỗ trợ việc lưu trữ và tìm kiếm tài liệu nhanh hơn.",
        "Bài học":
          "Quản lý tệp là kỹ năng nền tảng trong học tập số. Khi tài liệu được sắp xếp khoa học, người học giảm rủi ro thất lạc file và dễ kiểm soát các phiên bản tài liệu.",
        "Ứng dụng thực tế":
          "Trong Dược học, sinh viên cần quản lý giáo trình, bài báo khoa học, tài liệu thuốc, báo cáo thực hành và ảnh minh chứng. Kỹ năng tổ chức thư mục giúp quá trình học tập chính xác và chuyên nghiệp hơn."
      }
    },
    {
      code: "02",
      title: "Tìm kiếm và đánh giá tài liệu về Sinh lý người",
      focus: "Nguồn học thuật Y Dược",
      category: "Dược học",
      pdf: "files/bai-02.pdf",
      sourceFile: "Bài 2.pdf",
      featured: false,
      tags: ["Sinh lý", "Nguồn tin", "Độ tin cậy", "Học thuật"],
      summary:
        "Rèn luyện khả năng tìm kiếm, chọn lọc và đánh giá thông tin học thuật liên quan đến chủ đề Sinh lý người.",
      sections: {
        "Mục tiêu":
          "Rèn luyện khả năng tìm kiếm, chọn lọc và đánh giá thông tin học thuật liên quan đến chủ đề Sinh lý người.",
        "Tóm tắt quá trình":
          "Sinh viên thu thập tài liệu từ sách chuyên khảo, giáo trình, bài báo khoa học, tạp chí chuyên ngành và nguồn mở. Nội dung gồm giải phẫu - sinh lý người, insulin, cân bằng nội môi, đông máu, chức năng tim và đường tiêu hóa.",
        "Kết quả":
          "Sinh viên xây dựng được danh mục tài liệu tham khảo và bảng xếp hạng độ tin cậy theo cơ quan xuất bản, tính cập nhật, mức độ trích dẫn và giá trị học thuật.",
        "Bài học":
          "Tài liệu học thuật không chỉ cần đúng chủ đề mà còn cần độ tin cậy. Sách chuyên khảo, bài báo khoa học có phản biện và tạp chí uy tín thường có giá trị cao hơn nguồn phổ thông khó kiểm chứng.",
        "Ứng dụng thực tế":
          "Sinh lý người là nền tảng để học dược lý, dược động học và sử dụng thuốc hợp lý. Kỹ năng đánh giá nguồn giúp sinh viên Dược học tiếp cận tài liệu chính xác hơn khi học các môn chuyên ngành."
      }
    },
    {
      code: "03",
      title: "Viết prompt hiệu quả cho học tập Dược học",
      focus: "AI học thuật",
      category: "AI",
      pdf: "files/bai-03.pdf",
      sourceFile: "Bài 3_.pdf",
      featured: true,
      tags: ["Prompt", "Dược lâm sàng", "Ôn tập", "Kiểm chứng"],
      summary:
        "Phát triển kỹ năng viết prompt để khai thác AI trong tóm tắt tài liệu, giải thích dược động học và tạo câu hỏi ôn tập.",
      sections: {
        "Mục tiêu":
          "Phát triển kỹ năng viết prompt để khai thác AI trong các tác vụ học tập, đặc biệt trong lĩnh vực Dược học.",
        "Tóm tắt quá trình":
          "Sinh viên xây dựng prompt cho ba tác vụ: tóm tắt bài đọc về tuân thủ dùng thuốc, giải thích khái niệm dược động học và tạo bộ câu hỏi ôn tập về kháng kháng sinh. Mỗi tác vụ được xây dựng ở nhiều mức độ từ cơ bản, cải tiến đến nâng cao.",
        "Kết quả":
          "Prompt nâng cao cho kết quả tốt hơn vì có vai trò chuyên môn, cấu trúc rõ ràng, yêu cầu cụ thể và định hướng đối tượng học. Nội dung AI tạo ra sát ngành Dược và dễ dùng để ôn tập hơn.",
        "Bài học":
          "Prompt không chỉ là câu hỏi mà là bản thiết kế cho câu trả lời. Prompt càng rõ về mục tiêu, vai trò, cấu trúc và tiêu chí đầu ra thì kết quả càng hữu ích.",
        "Ứng dụng thực tế":
          "Kỹ năng viết prompt hỗ trợ tóm tắt tài liệu dược lâm sàng, giải thích dược động học, tạo câu hỏi về kháng kháng sinh và hệ thống hóa kiến thức chuyên ngành. Thông tin liên quan đến thuốc cần luôn được kiểm chứng từ nguồn chính thống."
      }
    },
    {
      code: "04",
      title: "Ứng dụng công cụ hợp tác trực tuyến trong làm việc nhóm",
      focus: "Cộng tác số",
      category: "Dược học",
      pdf: "files/bai-04.pdf",
      sourceFile: "Bài 4.pdf",
      featured: false,
      tags: ["Trello", "Google Docs", "Drive", "Discord"],
      summary:
        "Rèn luyện kỹ năng dùng công cụ trực tuyến để quản lý công việc, soạn thảo cộng tác, lưu trữ tài liệu và giao tiếp nhóm.",
      sections: {
        "Mục tiêu":
          "Rèn luyện kỹ năng sử dụng các công cụ trực tuyến để quản lý công việc, soạn thảo cộng tác, lưu trữ tài liệu và giao tiếp nhóm.",
        "Tóm tắt quá trình":
          "Sinh viên sử dụng Trello để quản lý dự án, Google Docs để chỉnh sửa tài liệu theo thời gian thực, Google Drive để lưu trữ tài liệu và Discord để trao đổi công việc. Quá trình gồm tạo bảng công việc, gắn nhãn, đặt hạn, liên kết tài liệu và chuẩn hóa cách đặt tên file.",
        "Kết quả":
          "Sinh viên biết cách theo dõi tiến độ, đóng góp nội dung, tương tác nhóm, lưu trữ đúng thư mục và kiểm soát phiên bản tài liệu. Các công cụ trực tuyến giúp giảm thất lạc thông tin và nâng cao hiệu quả làm việc nhóm.",
        "Bài học":
          "Hợp tác trực tuyến là chiến lược làm việc cần quy tắc đặt tên file, phân quyền rõ ràng, deadline cụ thể và nền tảng trung tâm để tránh phân tán thông tin.",
        "Ứng dụng thực tế":
          "Trong học tập Dược học, làm việc nhóm thường xuất hiện khi làm báo cáo, thuyết trình, nghiên cứu tài liệu thuốc hoặc xây dựng nội dung truyền thông sức khỏe. Kỹ năng cộng tác trực tuyến giúp nhóm làm việc chính xác và có tổ chức hơn."
      }
    },
    {
      code: "05",
      title: "Sáng tạo video ngắn với AI",
      focus: "Dự án video sáng tạo",
      category: "Sáng tạo",
      pdf: "files/bai-05.pdf",
      sourceFile: "Bài 5.pdf",
      featured: false,
      tags: ["ChatGPT", "Gemini", "Canva AI", "Video"],
      summary:
        "Thực hành sử dụng AI tạo sinh để hỗ trợ xây dựng video ngắn về đời sống sinh viên và tự điều chỉnh bản thân.",
      sections: {
        "Mục tiêu":
          "Thực hành sử dụng AI tạo sinh để hỗ trợ xây dựng video ngắn có tính đời sống, phản ánh quá trình thay đổi từ lộn xộn đến tự điều chỉnh bản thân.",
        "Tóm tắt quá trình":
          "Sinh viên sử dụng ChatGPT, Gemini và Claude để viết kịch bản, gợi ý thông điệp và xây dựng nội dung. DALL·E và Stable Diffusion được dùng để tạo hình ảnh minh họa, còn Canva AI và Adobe Firefly hỗ trợ thiết kế thumbnail, chỉnh màu và bố cục.",
        "Kết quả":
          "Sinh viên xây dựng được ý tưởng video 30-60 giây với bố cục gồm hiện thực bừa bộn, khoảnh khắc hối hận, quyết định thay đổi và ánh sáng mới. Sản phẩm kết hợp giữa nội dung AI gợi ý, ảnh minh họa và chỉnh sửa cá nhân.",
        "Bài học":
          "AI hỗ trợ tốt ở giai đoạn lên ý tưởng, viết kịch bản và tạo visual, nhưng sản phẩm cuối cùng vẫn cần người thực hiện chỉnh sửa âm thanh, nhịp dựng, cảm xúc và thông điệp.",
        "Ứng dụng thực tế":
          "Kỹ năng sáng tạo video có thể áp dụng vào truyền thông sức khỏe, video hướng dẫn sử dụng thuốc an toàn, nội dung giáo dục cộng đồng và truyền thông học đường."
      }
    },
    {
      code: "06",
      title: "Sử dụng AI có trách nhiệm trong học tập và nghiên cứu",
      focus: "AI trách nhiệm",
      category: "AI",
      pdf: "files/bai-06.pdf",
      sourceFile: "Bài 6.pdf",
      featured: false,
      tags: ["Minh bạch", "Kiểm chứng", "Bảo mật", "Học thuật"],
      summary:
        "Thực hành nguyên tắc sử dụng AI có trách nhiệm trong học tập, nghiên cứu và môi trường đại học.",
      sections: {
        "Mục tiêu":
          "Hiểu và thực hành nguyên tắc sử dụng AI có trách nhiệm trong học tập, nghiên cứu và môi trường đại học.",
        "Tóm tắt quá trình":
          "Sinh viên phân tích đề án sử dụng AI trong học tập và nghiên cứu tại Đại học Quốc gia Hà Nội, tìm hiểu vai trò của AI trong giáo dục, cơ hội và thách thức, đồng thời sử dụng Gemini và Canva để xây dựng infographic.",
        "Kết quả":
          "Sinh viên xác định được các nguyên tắc như đồng hành, không lái thay; kiểm chứng dữ liệu; thêm giá trị cá nhân; minh bạch khi sử dụng AI; bảo mật dữ liệu; và dùng AI để nâng cao kỹ năng thay vì né tránh tư duy.",
        "Bài học":
          "AI là công cụ hỗ trợ mạnh, nhưng người học phải giữ vai trò chủ động. Nội dung do AI tạo ra cần được kiểm chứng, chỉnh sửa và khai báo minh bạch trong sản phẩm học thuật.",
        "Ứng dụng thực tế":
          "Trong Dược học, sử dụng AI thiếu kiểm chứng có thể dẫn đến sai lệch thông tin về thuốc, liều dùng hoặc khuyến nghị sức khỏe. Sinh viên cần dùng AI như trợ lý học tập, không xem AI là nguồn chuyên môn cuối cùng."
      }
    },
    {
      code: "07",
      title: "Thiên kiến thuật toán trong AI y tế",
      focus: "Đạo đức AI y tế",
      category: "AI",
      pdf: "files/bai-07.pdf",
      sourceFile: "Bài 7.pdf",
      featured: true,
      tags: ["Thiên kiến", "Y tế", "Công bằng", "Đạo đức"],
      summary:
        "Phân tích thiên kiến thuật toán và bất bình đẳng trong chăm sóc sức khỏe khi ứng dụng AI y tế.",
      sections: {
        "Mục tiêu":
          "Phân tích vấn đề đạo đức khi ứng dụng AI trong y tế, đặc biệt là thiên kiến thuật toán và sự bất bình đẳng trong chăm sóc sức khỏe.",
        "Tóm tắt quá trình":
          "Sinh viên phân tích tình huống mô hình AI chẩn đoán ung thư da có độ chính xác cao với bệnh nhân da sáng nhưng bỏ sót nhiều tổn thương ác tính ở bệnh nhân da sẫm màu. Báo cáo tập trung vào dữ liệu huấn luyện thiếu đại diện, hậu quả tiềm tàng và giải pháp giảm thiểu thiên kiến.",
        "Kết quả":
          "Sinh viên nhận diện được vấn đề đạo đức chính là thiên kiến thuật toán, có thể dẫn đến chẩn đoán sai, chẩn đoán muộn, mất niềm tin vào hệ thống y tế và gia tăng bất bình đẳng trong chăm sóc sức khỏe.",
        "Bài học":
          "AI y tế không chỉ cần độ chính xác tổng thể mà còn cần công bằng giữa các nhóm bệnh nhân. Mô hình phải được đánh giá theo từng nhóm dân số, giám sát độc lập và sử dụng như công cụ hỗ trợ bác sĩ.",
        "Ứng dụng thực tế":
          "Tư duy về thiên kiến thuật toán giúp sinh viên Dược học thận trọng hơn khi tiếp cận AI trong y tế, đặc biệt trong hệ thống hỗ trợ ra quyết định, nghiên cứu thuốc, phân tích dữ liệu bệnh nhân và truyền thông sức khỏe."
      }
    }
  ],
  reflections: [
    {
      title: "Đã học được",
      text:
        "Qua 7 bài tập, sinh viên học được cách quản lý tài liệu số, tìm kiếm và đánh giá nguồn học thuật, viết prompt hiệu quả, hợp tác trực tuyến, sáng tạo nội dung với AI, sử dụng AI có trách nhiệm và phân tích đạo đức AI y tế."
    },
    {
      title: "Kỹ năng cải thiện",
      text:
        "Các kỹ năng được cải thiện gồm tổ chức dữ liệu, đánh giá nguồn tin, tư duy phản biện, viết prompt, làm việc nhóm, sáng tạo nội dung số và nhận diện rủi ro đạo đức của AI."
    },
    {
      title: "Khó khăn",
      text:
        "Khó khăn chính là xử lý nhiều nguồn tài liệu, viết prompt đủ rõ, kiểm chứng thông tin AI tạo ra, tổ chức công việc nhóm và chuyển ý tưởng AI thành sản phẩm có tính cá nhân."
    },
    {
      title: "Cách khắc phục",
      text:
        "Sinh viên khắc phục bằng cách chia nhỏ nhiệm vụ, đối chiếu nhiều nguồn, tự biên tập nội dung, chuẩn hóa cách lưu trữ file, dùng AI có kiểm soát và giữ vai trò quyết định cuối cùng."
    },
    {
      title: "Định hướng tương lai",
      text:
        "Các kỹ năng này có thể áp dụng vào học tập Dược học, tra cứu tài liệu chuyên ngành, làm báo cáo, xây dựng nội dung truyền thông sức khỏe, làm việc nhóm và tiếp cận AI y tế thận trọng."
    },
    {
      title: "Dược học và cân bằng cá nhân",
      text:
        "Công nghệ số và AI có thể hỗ trợ học tập hiệu quả nếu được sử dụng đúng cách. Sở thích cầu lông và nghe nhạc giúp sinh viên duy trì sức khỏe, tinh thần ổn định và khả năng tập trung."
    }
  ]
};
