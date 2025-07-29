import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';

function TermsAndConditions() {
  return (
    <Container sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography 
          variant="h2" 
          gutterBottom
          sx={{
            textAlign: 'center',
            mb: 6,
            background: 'linear-gradient(to right, #fff, #a5b4fc)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Terms and Conditions
        </Typography>

        <Paper
          elevation={0}
          sx={{
            p: 4,
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: 2,
          }}
        >
          <Box sx={{ color: '#a9b1d6' }}>
            <Typography variant="body2" paragraph>
              Last updated: {new Date().toLocaleDateString()}
            </Typography>

            <Typography variant="h5" sx={{ color: '#fff', mb: 3, mt: 4 }}>
              1. Legal Framework
            </Typography>
            <Typography paragraph>
              These Terms and Conditions are governed by the laws of Pakistan, including but not limited to:
            </Typography>
            <ul style={{ marginLeft: '20px', marginBottom: '20px' }}>
              <li>The Prevention of Electronic Crimes Act (PECA) 2016</li>
              <li>The Electronic Transactions Ordinance 2002</li>
              <li>The Consumer Protection Laws of Pakistan</li>
              <li>Applicable International Laws and Regulations</li>
            </ul>

            <Typography variant="h5" sx={{ color: '#fff', mb: 3, mt: 4 }}>
              2. Acceptance of Terms
            </Typography>
            <Typography paragraph>
              By accessing and using this website, you acknowledge that you have read, understood, and agree to be bound by these 
              Terms and Conditions, as well as our Privacy Policy. If you do not agree with any part of these terms, you must not 
              use this website.
            </Typography>

            <Typography variant="h5" sx={{ color: '#fff', mb: 3, mt: 4 }}>
              3. Intellectual Property Rights
            </Typography>
            <Typography paragraph>
              In accordance with Pakistani Copyright Ordinance 1962 (as amended) and international copyright laws:
            </Typography>
            <ul style={{ marginLeft: '20px', marginBottom: '20px' }}>
              <li>All content, including but not limited to text, graphics, logos, images, audio clips, digital downloads, and data compilations, is the property of Umar Ahad Uddin Ahmed Usmani</li>
              <li>Unauthorized use, reproduction, or distribution of the content is strictly prohibited</li>
              <li>Any violations will be subject to legal action under applicable laws</li>
            </ul>

            <Typography variant="h5" sx={{ color: '#fff', mb: 3, mt: 4 }}>
              4. User Obligations
            </Typography>
            <Typography paragraph>
              Under PECA 2016 and related regulations, users must:
            </Typography>
            <ul style={{ marginLeft: '20px', marginBottom: '20px' }}>
              <li>Provide accurate information when using contact forms</li>
              <li>Not engage in any unauthorized access or cyber attacks</li>
              <li>Respect intellectual property rights</li>
              <li>Not use the website for any illegal purposes</li>
            </ul>

            <Typography variant="h5" sx={{ color: '#fff', mb: 3, mt: 4 }}>
              5. Limitation of Liability
            </Typography>
            <Typography paragraph>
              In compliance with Pakistani contract law and international standards:
            </Typography>
            <ul style={{ marginLeft: '20px', marginBottom: '20px' }}>
              <li>The website is provided "as is" without any warranties</li>
              <li>We are not liable for any damages arising from website use</li>
              <li>Users assume all risks associated with website use</li>
            </ul>

            <Typography variant="h5" sx={{ color: '#fff', mb: 3, mt: 4 }}>
              6. Data Protection and Privacy
            </Typography>
            <Typography paragraph>
              Your data protection rights are governed by:
            </Typography>
            <ul style={{ marginLeft: '20px', marginBottom: '20px' }}>
              <li>The Draft Personal Data Protection Bill of Pakistan</li>
              <li>PECA 2016 data protection provisions</li>
              <li>International data protection standards where applicable</li>
            </ul>

            <Typography variant="h5" sx={{ color: '#fff', mb: 3, mt: 4 }}>
              7. Project Showcases and Portfolio Content
            </Typography>
            <Typography paragraph>
              All projects and work samples displayed are protected under:
            </Typography>
            <ul style={{ marginLeft: '20px', marginBottom: '20px' }}>
              <li>Pakistani Intellectual Property Laws</li>
              <li>International Copyright Conventions</li>
              <li>Specific project licenses where applicable</li>
            </ul>

            <Typography variant="h5" sx={{ color: '#fff', mb: 3, mt: 4 }}>
              8. Third-Party Links and Content
            </Typography>
            <Typography paragraph>
              For external links and third-party content:
            </Typography>
            <ul style={{ marginLeft: '20px', marginBottom: '20px' }}>
              <li>We are not responsible for external content</li>
              <li>Users access third-party content at their own risk</li>
              <li>External sites have their own terms and policies</li>
            </ul>

            <Typography variant="h5" sx={{ color: '#fff', mb: 3, mt: 4 }}>
              9. Modifications to Terms
            </Typography>
            <Typography paragraph>
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. 
              Continued use of the website constitutes acceptance of modified terms.
            </Typography>

            <Typography variant="h5" sx={{ color: '#fff', mb: 3, mt: 4 }}>
              10. Dispute Resolution
            </Typography>
            <Typography paragraph>
              Any disputes shall be resolved through:
            </Typography>
            <ul style={{ marginLeft: '20px', marginBottom: '20px' }}>
              <li>Initial amicable settlement attempts</li>
              <li>Pakistani courts under PECA 2016 Section 37</li>
              <li>Applicable alternative dispute resolution mechanisms</li>
            </ul>

            <Typography variant="h5" sx={{ color: '#fff', mb: 3, mt: 4 }}>
              11. Contact Information
            </Typography>
            <Typography paragraph>
              For any questions regarding these terms, contact:
              <br />
              Email: umarahadusmani@gmail.com
              <br />
              Phone: +92 333 4739757
            </Typography>

            <Typography sx={{ mt: 4, fontStyle: 'italic' }}>
              These terms and conditions are compliant with Pakistani and international laws as of {new Date().toLocaleDateString()}.
            </Typography>
          </Box>
        </Paper>
      </motion.div>
    </Container>
  );
}

export default TermsAndConditions; 