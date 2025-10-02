describe('Flow 1 - Tambah Employee Baru', () => {

  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
  })

  it('Positive Case - Tambah employee berhasil', () => {
    cy.contains('PIM').click()
  cy.contains('Add Employee').click()

  cy.get('input[name="firstName"]').type('Ahmad')
  cy.get('input[name="lastName"]').type('Maulana')

  // Aktifkan Create Login Details
  cy.get('.oxd-switch-input').click()

  // Isi credential untuk karyawan baru
  cy.get('input.oxd-input').eq(5).type('maulana')       // Username
  cy.get('input[type="password"]').eq(0).type('Maulana12')
  cy.get('input[type="password"]').eq(1).type('Maulana12')

  cy.get('button[type="submit"]').click()

  // Assertion: halaman Personal Details muncul
  cy.contains('Personal Details', { timeout: 10000 }).should('be.visible')
    cy.get('input[name="firstName"]', { timeout: 10000 }).should('have.value', 'Ahmad')
cy.get('input[name="lastName"]', { timeout: 10000 }).should('have.value', 'Maulana')
// assertion sukses
  })

  it('Negative Case - Gagal tambah employee (tanpa isi data)', () => {
    cy.contains('PIM').click()
    cy.contains('Add Employee').click()
    cy.get('button[type="submit"]').click()

    cy.contains('Required').should('exist') // assertion error muncul
  })


})
