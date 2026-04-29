<template>
    <div>
      <HeroSection />
    
      <section class="section">
        <div class="container">
          <SectionTitle
            small="Why Choose Us"
            title="Elite Legal Solutions for Modern Companies"
          />
    
          <div class="cards three">
            <div class="card">
              <h3>Corporate Law</h3>
              <p>PT, PMA, shareholder agreements, due diligence.</p>
            </div>
    
            <div class="card">
              <h3>Litigation</h3>
              <p>Commercial dispute, debt recovery, negotiation.</p>
            </div>
    
            <div class="card">
              <h3>Contracts</h3>
              <p>Drafting, review, negotiation, risk mitigation.</p>
            </div>
          </div>
        </div>
      </section>
    
      <CTASection />
    </div>
    </template>
    
    <script setup>
    import HeroSection from '../components/HeroSection.vue'
    import SectionTitle from '../components/SectionTitle.vue'
    import CTASection from '../components/CTASection.vue'
    </script>