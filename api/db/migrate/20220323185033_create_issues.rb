class CreateIssues < ActiveRecord::Migration[6.0]
  def change
    create_table :issues do |t|
      t.text :content, null: false
      t.references :user, null: false, foreign_key: true
      t.timestamps
    end
  end
end
