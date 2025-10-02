describe('Flow 2 - Tambah Leave Entitlement', () => {

  beforeEach(() => {
    // Login sebagai Admin
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
  })

  it('Positive Case - Tambah entitlement berhasil', () => {
    // Masuk menu Add Entitlements
    cy.contains('Leave').click()
    cy.contains('Entitlements').click()
    cy.contains('Add Entitlements').click()

    // Cari employee yang tadi kita buat
    cy.get('.oxd-autocomplete-text-input input').type('Ahmad Maulana')
  cy.contains('.oxd-autocomplete-dropdown', 'Ahmad Maulana', { timeout: 5000 }).click()

    // Pilih jenis cuti (Vacation)
    cy.get('.oxd-select-text-input').eq(0).click()
    cy.contains('CAN - Vacation', { timeout: 6000 }).click({ force: true })

    // Isi angka entitlement
     cy.get('input.oxd-input.oxd-input--active').eq(1).type('5')

    // Submit
    cy.get('button[type="submit"]').click()

    // Assertion: notifikasi sukses
    cy.contains('Confirm', { timeout: 6000 }).should('be.visible').click()
  })

  it('Negative Case - Gagal tambah entitlement tanpa angka', () => {
    cy.contains('Leave').click()
    cy.contains('Entitlements').click()
    cy.contains('Add Entitlements').click()

    // Pilih employee
    cy.get('.oxd-autocomplete-text-input input').type('Ahmad Maulana')
  cy.contains('.oxd-autocomplete-dropdown', 'Ahmad Maulana', { timeout: 5000 }).click()

    // Pilih jenis cuti (Vacation)
    cy.get('.oxd-select-text-input').eq(0).click()
    cy.contains('CAN - Vacation', { timeout: 6000 }).click({ force: true })

    // Tidak isi angka → langsung klik Save
    cy.get('button[type="submit"]').click()

    // Assertion: error Required muncul
    cy.contains('Required').should('exist')
  })

})
