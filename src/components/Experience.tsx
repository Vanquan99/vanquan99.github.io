import React from 'react';
import './Experience.css';

interface ProjectItem {
  name: string;
  role: string;
  period: string;
  description: string;
  techStack: string;
  responsibilities: string[];
}

interface ExperienceItem {
  id: number;
  type: 'work' | 'education';
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
  technologies?: string[];
  projects?: ProjectItem[];
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    type: 'work',
    title: 'Software Engineer (Flutter Focus)',
    company: 'Ominext JSC',
    location: 'TP. Hồ Chí Minh, Việt Nam',
    period: '06/2022 - Hiện tại',
    description: 'Phát triển ứng dụng mobile cho các khách hàng Nhật Bản, tập trung vào Flutter và Native Integration.',
    highlights: [],
    technologies: ['Flutter', 'Dart', 'Kotlin', 'Next.js', 'TypeScript', 'Firebase', 'WebSocket'],
    projects: [
      {
        name: 'Ceres (Softbank)',
        role: 'Android Developer',
        period: '',
        description: 'Ứng dụng self-care toàn diện cho khách hàng Softbank Nhật Bản, cho phép quản lý tập trung viễn thông và tiện ích gia đình (điện, nước, gas, internet) cùng với quản lý hợp đồng số.',
        techStack: 'Kotlin, Swift, MVP',
        responsibilities: [
          'Phát triển và bảo trì ứng dụng Android native',
          'Tích hợp các dịch vụ viễn thông và tiện ích',
          'Phối hợp chéo với team iOS để thiết kế và chuẩn hóa kiến trúc Native Integration, đảm bảo sự đồng nhất về luồng dữ liệu và UI/UX'
        ]
      },
      {
        name: 'FBT (Web App)',
        role: 'Web Developer',
        period: '09/2025 - 11/2025',
        description: 'Ứng dụng quản lý thông tin em bé, thêm các tính năng mới.',
        techStack: 'Next.js, TypeScript, React, Tailwind CSS',
        responsibilities: [
          'Phát triển ứng dụng web với Next.js',
          'Thiết kế UI từ Figma',
          'Thêm các tính năng mới cho hệ thống'
        ]
      },
      {
        name: 'Pegasus',
        role: 'Flutter Developer',
        period: '06/2024 - 09/2024 | 05/2025 - 09/2025',
        description: 'Hệ thống cho phép người dùng tìm kiếm bệnh viện, đặt lịch hẹn và theo dõi các cuộc khám bệnh.',
        techStack: 'Dart, Flutter, WebSocket, Hasura, SQL Server, Bloc, GraphQL',
        responsibilities: [
          'Thiết kế UI từ Figma',
          'Phát triển tính năng tìm kiếm và đặt lịch',
          'Tích hợp real-time updates với WebSocket'
        ]
      },
      {
        name: 'Astrotalk',
        role: 'Flutter Developer',
        period: '09/2024 - 05/2025',
        description: 'Hệ thống cho phép các bác sĩ thảo luận về tình trạng bệnh nhân và trao đổi thông tin bệnh nhân.',
        techStack: 'Dart, Flutter, WebSocket, SQL Server, Bloc',
        responsibilities: [
          'Thiết kế UI từ Figma',
          'Phát triển tính năng chat và chia sẻ hồ sơ',
          'Đảm bảo bảo mật thông tin y tế'
        ]
      },
      {
        name: 'Nutrifacts',
        role: 'Flutter Developer',
        period: '04/2024 - 06/2024',
        description: 'Ứng dụng tính toán chỉ số dinh dưỡng và sức khỏe trên nền tảng Flutter.',
        techStack: 'Dart, Flutter, Firebase, SQLite, Riverpod',
        responsibilities: [
          'Dựng UI phức tạp với Animation/Custom Painter',
          'Phát triển tính năng tính toán dinh dưỡng',
          'Tích hợp Firebase và local database'
        ]
      },
      {
        name: 'Sugi Pharmacy',
        role: 'Flutter Developer',
        period: '06/2022 - 04/2024',
        description: 'Phát triển ứng dụng quản lý coupon nhà thuốc, thêm các tính năng mới.',
        techStack: 'Dart, Flutter, Firebase, Salesforce, Riverpod',
        responsibilities: [
          'Thiết kế UI từ Figma',
          'Phát triển tính năng quản lý coupon',
          'Tích hợp với Salesforce'
        ]
      }
    ]
  },
  {
    id: 2,
    type: 'education',
    title: 'Kỹ sư Công nghệ Thông tin',
    company: 'Đại học Giao thông Vận tải TP.HCM',
    location: 'TP. Hồ Chí Minh, Việt Nam',
    period: '2017 - 2021',
    description: 'Chuyên ngành Công nghệ Thông tin, tốt nghiệp với nền tảng vững chắc về kỹ thuật phần mềm.',
    highlights: [
      'Hoàn thành khóa học "Android programming from basic to advanced" - Khoa Pham Academy (2021)',
      'Nền tảng vững chắc về kỹ thuật phần mềm',
      'Nghiên cứu về Mobile Development',
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <div className="section-header">
          <span className="section-tag">&lt;experience&gt;</span>
          <h2 className="section-title">Kinh nghiệm</h2>
          <p className="section-subtitle">
            Hành trình phát triển chuyên môn của tôi
          </p>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className={`timeline-item ${exp.type}`}
            >
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                {index !== experiences.length - 1 && <div className="marker-line"></div>}
              </div>

              <div className="timeline-content">
                <div className="timeline-header">
                  <div className="timeline-icon">
                    {exp.type === 'work' ? '💼' : '🎓'}
                  </div>
                  <div className="timeline-meta">
                    <span className="timeline-period">{exp.period}</span>
                    <span className="timeline-location">📍 {exp.location}</span>
                  </div>
                </div>

                <h3 className="timeline-title">{exp.title}</h3>
                <h4 className="timeline-company">{exp.company}</h4>
                <p className="timeline-description">{exp.description}</p>

                {exp.technologies && (
                  <div className="timeline-tech">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                )}

                {exp.projects && exp.projects.length > 0 && (
                  <div className="timeline-projects">
                    <h5 className="projects-title">📂 Dự án</h5>
                    {exp.projects.map((project, i) => (
                      <div key={i} className="project-item">
                        <div className="project-header">
                          <h6 className="project-name">{project.name}</h6>
                          <span className="project-role">{project.role}</span>
                          {project.period && <span className="project-period">{project.period}</span>}
                        </div>
                        <p className="project-description">{project.description}</p>
                        <div className="project-tech">
                          <strong>Tech stack:</strong> {project.techStack}
                        </div>
                        <div className="project-responsibilities">
                          <strong>Responsibilities:</strong>
                          <ul>
                            {project.responsibilities.map((resp, j) => (
                              <li key={j}>{resp}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {exp.highlights.length > 0 && (
                  <ul className="timeline-highlights">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="experience-cta">
          <div className="cta-card">
            <div className="cta-icon">📄</div>
            <div className="cta-content">
              <h4>Muốn biết thêm chi tiết?</h4>
              <p>Tải CV đầy đủ của tôi để xem thêm về kinh nghiệm và kỹ năng</p>
            </div>
            <a href="https://drive.google.com/file/d/1EFH3yD_IeYyhdFbUN-eJpCsfPwDhZnPc/view?usp=drivesdk" className="cta-button" target="_blank" rel="noopener noreferrer">
              Tải CV
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
