import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-header">
          <span className="section-tag">&lt;about&gt;</span>
          <h2 className="section-title">Về tôi</h2>
          <p className="section-subtitle">
            Hành trình của tôi trong thế giới phát triển ứng dụng di động
          </p>
        </div>

        <div className="about-content">
          <div className="about-image">
            <div className="image-wrapper">
              <div className="image-placeholder">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <div className="image-decoration"></div>
              <div className="image-dots"></div>
            </div>
          </div>

          <div className="about-text">
            <div className="about-intro">
              <h3>Xin chào! Tôi là <span className="highlight">Đinh Văn Quân</span></h3>
              <p>
                Tôi là Flutter Developer với hơn <strong>3.5 năm kinh nghiệm</strong> xây dựng 
                các ứng dụng mobile có khả năng mở rộng và hiệu suất cao. Chuyên sâu về 
                Clean Architecture, Native Integration (Method Channels) và App Store Deployment.
              </p>
              <p>
                Hiện tại, tôi đang làm việc tại <strong>Ominext</strong>, TP. Hồ Chí Minh, 
                nơi tôi phát triển các ứng dụng cho khách hàng Nhật Bản. Tôi có nền tảng 
                vững chắc về phần mềm với kỹ năng bổ sung về Web (Next.js/TypeScript).
              </p>
            </div>

            <div className="about-details">
              <div className="detail-card">
                <div className="detail-icon">🎓</div>
                <div className="detail-content">
                  <h4>Học vấn</h4>
                  <p>Kỹ sư Công nghệ Thông tin</p>
                  <span>ĐH Giao thông Vận tải TP.HCM</span>
                </div>
              </div>

              <div className="detail-card">
                <div className="detail-icon">💼</div>
                <div className="detail-content">
                  <h4>Vị trí hiện tại</h4>
                  <p>Software Engineer (Flutter Focus)</p>
                  <span>Ominext JSC</span>
                </div>
              </div>

              <div className="detail-card">
                <div className="detail-icon">📍</div>
                <div className="detail-content">
                  <h4>Địa điểm</h4>
                  <p>Quận Bàu Cát 1, TP.HCM</p>
                  <span>Sẵn sàng làm việc remote</span>
                </div>
              </div>

              <div className="detail-card">
                <div className="detail-icon">🌟</div>
                <div className="detail-content">
                  <h4>Chuyên môn</h4>
                  <p>Flutter, Clean Architecture</p>
                  <span>Mobile & Web Development</span>
                </div>
              </div>
            </div>

            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-number">6+</span>
                <span className="highlight-text">Dự án đã phát triển</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">3+</span>
                <span className="highlight-text">Năm kinh nghiệm</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">🇯🇵</span>
                <span className="highlight-text">Khách hàng Nhật Bản</span>
              </div>
            </div>

            <a href="#contact" className="about-cta">
              <span>Liên hệ với tôi</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
