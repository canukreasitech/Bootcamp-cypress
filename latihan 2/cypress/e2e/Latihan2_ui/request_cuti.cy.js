describe('Flow 3 - Employee Request & Admin Approve Leave', () => {

   it('Positive Case - Employee request cuti & admin approve', () => {
    // Login sebagai employee (Budi)
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name="username"]').type('maulana')
    cy.get('input[name="password"]').type('Maulana12')
    cy.get('button[type="submit"]').click()

    // Employee apply leave
    cy.contains('Leave').click()
    cy.contains('Apply').click()

    // Tunggu field Leave Type muncul
    cy.contains('Leave Type', { timeout: 10000 }).should('be.visible')

    // Klik dropdown Leave Type
    cy.get('.oxd-select-text-input').click()
c
    // Pilih jenis cuti (Vacation)
    cy.contains('CAN - Vacation', { timeout: 6000 }).click({ force: true })

    // Isi tanggal
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').eq(0).type('10-10-2025')
   

    // Submit
    cy.get('.oxd-button').click()
    cy.contains('Success', { timeout: 6000 }).should('be.visible')

    // Login sebagai Admin
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()

    // Approve leave Budi
    cy.contains('Leave').click()
    cy.contains('Leave List').click()
    cy.contains('Budi Santoso', { timeout: 10000 }).should('be.visible').click()
    cy.contains('Approve').click({ force: true })
    cy.contains('Successfully Updated', { timeout: 6000 }).should('be.visible')

    // Login kembali sebagai Employee → cek status
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name="username"]').type('maulana')
    cy.get('input[name="password"]').type('Maulana12')
    cy.get('button[type="submit"]').click()

    cy.contains('Leave').click()
    cy.contains('My Leave').click()
    cy.contains('Approved', { timeout: 10000 }).should('be.visible')
  })

  it('Negative Case - Employee gagal apply cuti tanpa tanggal', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name="username"]').type('maulana')
    cy.get('input[name="password"]').type('Maulana12')
    cy.get('button[type="submit"]').click()

    cy.contains('Leave').click()
    cy.contains('Apply').click()

    // Klik langsung save tanpa isi tanggal
    cy.get('button[type="submit"]').click()

    // Assertion: error Required muncul
    cy.contains('Required').should('exist')
  })

})
