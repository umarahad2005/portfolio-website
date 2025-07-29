import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';

function PrivacyPolicy() {
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
          Privacy Policy
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
              1. Introduction and Legal Framework
            </Typography>
            <Typography paragraph>
              This Privacy Policy complies with the Prevention of Electronic Crimes Act (PECA) 2016 of Pakistan, 
              the Draft Personal Data Protection Bill of Pakistan, the General Data Protection Regulation (GDPR), 
              and the California Consumer Privacy Act (CCPA). It outlines how we collect, use, and protect your personal information.
            </Typography>

            <Typography variant="h5" sx={{ color: '#fff', mb: 3, mt: 4 }}>
              2. Information We Collect
            </Typography>
            <Typography paragraph>
              In accordance with Section 10(1) of the Draft Personal Data Protection Bill, we collect:
            </Typography>
            <ul style={{ marginLeft: '20px', marginBottom: '20px' }}>
              <li>Basic information (name, email)</li>
              <li>Contact details when provided voluntarily</li>
              <li>Technical information (IP address, browser type)</li>
              <li>Usage data (website interaction patterns)</li>
            </ul>

            <Typography variant="h5" sx={{ color: '#fff', mb: 3, mt: 4 }}>
              3. Legal Basis for Processing
            </Typography>
            <Typography paragraph>
              Under Article 6 of GDPR and Section 4 of the Draft Personal Data Protection Bill, we process your data based on:
            </Typography>
            <ul style={{ marginLeft: '20px', marginBottom: '20px' }}>
              <li>Your explicit consent</li>
              <li>Legitimate business interests</li>
              <li>Legal obligations</li>
              <li>Contract fulfillment when applicable</li>
            </ul>

            <Typography variant="h5" sx={{ color: '#fff', mb: 3, mt: 4 }}>
              4. Data Protection Measures
            </Typography>
            <Typography paragraph>
              In compliance with Section 9 of PECA 2016 and Article 32 of GDPR, we implement:
            </Typography>
            <ul style={{ marginLeft: '20px', marginBottom: '20px' }}>
              <li>End-to-end encryption for data transmission</li>
              <li>Regular security assessments</li>
              <li>Access controls and authentication measures</li>
              <li>Data backup and recovery procedures</li>
            </ul>

            <Typography variant="h5" sx={{ color: '#fff', mb: 3, mt: 4 }}>
              5. Your Rights
            </Typography>
            <Typography paragraph>
              Under Pakistani law and international regulations, you have the right to:
            </Typography>
            <ul style={{ marginLeft: '20px', marginBottom: '20px' }}>
              <li>Access your personal data</li>
              <li>Rectify inaccurate information</li>
              <li>Request data deletion</li>
              <li>Object to data processing</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>

            <Typography variant="h5" sx={{ color: '#fff', mb: 3, mt: 4 }}>
              6. Cross-Border Data Transfers
            </Typography>
            <Typography paragraph>
              Any international data transfers comply with Chapter V of GDPR and Section 14 of the Draft Personal Data Protection Bill, 
              ensuring adequate protection measures are in place.
            </Typography>

            <Typography variant="h5" sx={{ color: '#fff', mb: 3, mt: 4 }}>
              7. Data Retention
            </Typography>
            <Typography paragraph>
              We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, 
              or as required by applicable laws and regulations.
            </Typography>

            <Typography variant="h5" sx={{ color: '#fff', mb: 3, mt: 4 }}>
              8. Children's Privacy
            </Typography>
            <Typography paragraph>
              In accordance with COPPA and local regulations, we do not knowingly collect or process data from children 
              under 13 years of age without parental consent.
            </Typography>

            <Typography variant="h5" sx={{ color: '#fff', mb: 3, mt: 4 }}>
              9. Contact Information
            </Typography>
            <Typography paragraph>
              For privacy-related inquiries or to exercise your rights, contact our Data Protection Officer at:
              <br />
              Email: umarahadusmani@gmail.com
              <br />
              Phone: +92 333 4739757
            </Typography>

            <Typography variant="h5" sx={{ color: '#fff', mb: 3, mt: 4 }}>
              10. Updates to This Policy
            </Typography>
            <Typography paragraph>
              We may update this policy to reflect changes in legislation or our practices. Significant changes will be 
              notified to users through our website or email.
            </Typography>

            <Typography variant="h5" sx={{ color: '#fff', mb: 3, mt: 4 }}>
              11. Dispute Resolution
            </Typography>
            <Typography paragraph>
              Any disputes shall be resolved in accordance with Pakistani law, specifically under the jurisdiction of 
              Pakistani courts as per PECA 2016 Section 37.
            </Typography>

            <Typography sx={{ mt: 4, fontStyle: 'italic' }}>
              This privacy policy is compliant with Pakistani and international data protection laws as of {new Date().toLocaleDateString()}.
            </Typography>
          </Box>
        </Paper>
      </motion.div>
    </Container>
  );
}

export default PrivacyPolicy; 